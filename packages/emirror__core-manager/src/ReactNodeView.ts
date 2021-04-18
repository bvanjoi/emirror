import React, { useEffect } from 'react';
import { Node as PMNode } from '@emirror/pm/model';
import { EditorView, NodeView } from '@emirror/pm/view';
import {
  PluginsProvider,
  PortalProvider
} from '@emirror/core-provider';
import { ErrorMsg } from './constant';

type ReactComponentProps = {
  [key: string]: any;
};

type Attrs = {
  [key: string]: any;
};

interface NodeViewProps<
  P = ReactComponentProps,
  A extends Attrs = {}
> {
  reactComponentProps: P;
  attrs: A;
}

type ForwardRef = (node: HTMLElement | null) => void;

/**
 *
 * @param container The DOM inside portalProvider
 * @param portalProvider
 * @returns A HOC which would add subscrible a cb in container.
 */
const createListenProps = <T extends any>(
  container: HTMLElement,
  portalProvider: PortalProvider
) => (cb: (newProps: T) => void) => {
  useEffect(() => {
    portalProvider.subscribe(container, cb);
    return () => {
      portalProvider.unsubscribe(container, cb);
    };
  }, []);
};

/**
 * Prosemirror nodeView to React Component
 */
class ReactNodeViews<P = 'ReactComponentProps', A extends Attrs = {}>
implements NodeView {
  /**
   * The React Component need to rendered.
   */
  private reactComponent?: React.ComponentType<any>;
  /**
   * The React Component Props;
   */
  private reactComponentProps: P;
  /**
   *
   */
  private portalProvider: PortalProvider;
  /**
   *
   */
  private pluginsProvider: PluginsProvider;
  /**
   * render node or mark.
   */
  private pluginType: 'node' | 'mark';

  /**
   * Outer DOM container PMNode
   */
  dom: HTMLElement;
  /**
   * Hold the PMNode's content
   */
  contentDOM: Node | null;
  /**
   * The Prosemirror Node
   */
  node: PMNode;

  /**
   * The prosemirror view.
   */
  view: EditorView;

  /**
   * if pluginType equal node, it means get PMNode current positon.
   *
   * Else if pluginType equal mark, it a boolean which indicates
   * whether the mark's content is inline.
   *
   */
  getPos: (() => number) | boolean;

  constructor(
    node: PMNode,
    view: EditorView,
    getPos: (() => number) | boolean,
    portalProvider: PortalProvider,
    pluginsProvider: PluginsProvider,
    reactComponent?: React.ComponentType,
    reactComponentProps?: P
  ) {
    this.node = node;
    this.view = view;
    this.getPos = getPos;
    if (typeof getPos === 'boolean') {
      this.pluginType = 'mark';
    } else {
      this.pluginType = 'node';
    }
    this.portalProvider = portalProvider;
    this.pluginsProvider = pluginsProvider;
    this.reactComponent = reactComponent;
    this.reactComponentProps = reactComponentProps;
  }

  init() {
    this.dom = this.createContainerDOM();
    this.contentDOM = this.createContentDOM();
    if (this.contentDOM) {
      this.dom.appendChild(this.contentDOM);
    }

    const useListenProps = createListenProps<NodeViewProps<P, A>>(
      this.dom,
      this.portalProvider
    );

    this.renderReactComponent(
      this.render(
        this.createProps(this.node),
        this.handleRef,
        useListenProps
      )
    );
    return this;
  }

  /**
   * Create Container DOM for this.dom
   * @returns if PMNode is inline, then return span, else return div;
   */
  createContainerDOM(): HTMLElement {
    const containerDOM = this.node.isInline ?
      document.createElement('span') :
      document.createElement('div');
    containerDOM.classList.add(
      `emirror-${this.node.type.name}__nodeview-dom`
    );
    return containerDOM;
  }

  /**
   * Create Content DOM for this.contentDOM
   * @returns if PMNode is leaft node, it returns undefined.
   */
  createContentDOM(): Node | undefined {
    if (this.pluginType !== 'node' && this.pluginType !== 'mark') {
      return;
    }
    const contentDOM =
      this.pluginType === 'node' ?
        document.createElement('div') :
        document.createElement('span');
    contentDOM.classList.add(
      `emirror-${this.node.type.name}__content-dom`
    );
    return contentDOM;
  }

  /**
   *
   * @param reactComponent It generate from this.render.
   */
  renderReactComponent(reactComponent: React.ReactElement | null) {
    if (!this.dom) {
      console.error(ErrorMsg.INVALID_CONTENT_DOM);
      return;
    } else if (!reactComponent) {
      return;
    }
    this.portalProvider.render(reactComponent, this.dom);
  }

  /**
   *
   * @param initialProps
   * @param forwardRef
   * @param useListenProps
   * @returns
   */
  render(
    initialProps: NodeViewProps<P, A>,
    forwardRef: ForwardRef,
    useListenProps: (
      cb: (newProps: NodeViewProps<P, A>) => void
    ) => void
  ): React.ReactElement | null {
    if (!this.reactComponent) {
      console.error(ErrorMsg.INVALID_REACT_COMPONENT);
      return null;
    }
    return React.createElement(this.reactComponent, {
      ref: forwardRef,
      initialProps,
      useListenProps,
    });
  }

  /**
   *
   * @param node ProsemirrorNode
   * @returns The reactComponent Props and PMNode's attrs.
   */
  createProps(node: PMNode): NodeViewProps<P, A> {
    return {
      reactComponentProps: this.reactComponentProps,
      attrs: node.attrs as A,
    };
  }

  /**
   * After react component rendered, if the nodeView includes contentDOM,
   * then use forwardRef.
   * @param node ref of DOM node
   */
  handleRef(node: HTMLElement) {
    if (node && this.contentDOM && !node.contains(this.contentDOM)) {
      node.appendChild(this.contentDOM);
    }
  }

  /**
   * The function is called when the nodeView updating itself.
   * @param node possibly of a different type.
   */
  update(node: PMNode): boolean {
    if (!this.dom) {
      return false;
    }
    if (node.type !== this.node.type) {
      return false;
    }
    this.node = node;
    this.portalProvider.update(this.dom, this.createProps(node));
    return true;
  }

  /**
   * The function is called when the nodeView is destroy.
   */
  destroy() {
    if (this.dom) {
      this.portalProvider.remove(this.dom);
    }
    this.dom = undefined;
    this.contentDOM = undefined;
  }

  /**
   * The function is called when a DOM or selection
   * change happens within the nodeView
   */
  ignoreMutation(
    mutation: MutationRecord | { type: 'selection'; target: Element }
  ): boolean {
    if (mutation.type === 'selection') {
      return false;
    } else if (!this.contentDOM) {
      return true;
    }
    return !this.contentDOM.contains(mutation.target);
  }

  /**
   * Received a react component and generate ReactNodeViews.
   */
  static fromReactComponent = (
    reactComponent: React.ComponentType,
    portalProvider: PortalProvider,
    pluginsProvider: PluginsProvider,
    reactComponentProps: ReactComponentProps = {}
  ) => (
    node: PMNode,
    view: EditorView,
    getPos: (() => number) | boolean
  ) =>
    new ReactNodeViews(
      node,
      view,
      getPos,
      portalProvider,
      pluginsProvider,
      reactComponent,
      reactComponentProps
    ).init();
}

export const genReactNodeViews = ReactNodeViews.fromReactComponent;
