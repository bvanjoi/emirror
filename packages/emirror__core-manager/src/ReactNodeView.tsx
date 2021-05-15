import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DOMSerializer, Node as PMNode } from '@emirror/pm/model';
import { Decoration, EditorView, NodeView } from '@emirror/pm/view';
import { ContextProps } from '@emirror/core-react';
import { kebabCase } from 'case-anything';

/**
 * NodeView/MarkView for nodeView
 */
type IReactNodeViewContext = {
  node: PMNode;
  view: EditorView;
  getPos: (() => number) | boolean;
  decorations: Decoration[];
};

/**
 * The Context for ReactComponentView,
 */
const ReactNodeViewContext = React.createContext<IReactNodeViewContext>(null);

/**
 * Prosemirror nodeView to React Component
 */
class ReactNodeViews implements NodeView {
  /**
   * The React Component need to rendered.
   */
  private reactComponent: React.ComponentType;
  /**
   * The Context That my be used.
   */
  private ctx: ContextProps;
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
  contentDOM: Node;

  /**
   * Wrapper the content node.
   */
  contentDOMWrapper: HTMLElement;

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

  /**
   * The decorations for nodeView;
   */
  decorations: Decoration[];

  constructor(
    node: PMNode,
    view: EditorView,
    getPos: (() => number) | boolean,
    decorations: Decoration[],
    ctx: ContextProps,
    reactComponent: React.ComponentType,
  ) {
    this.node = node;
    this.view = view;
    this.getPos = getPos;
    this.decorations = decorations;
    if (typeof getPos === 'boolean') {
      this.pluginType = 'mark';
    } else {
      this.pluginType = 'node';
    }
    this.ctx = ctx;
    this.reactComponent = reactComponent;
  }

  init() {
    this.dom = this.createContainerDOM();
    const { contentDOM, wrapper } = this.createContentDOM();
    this.contentDOM = contentDOM;
    this.contentDOMWrapper = wrapper;

    if (this.contentDOMWrapper) {
      this.dom.appendChild(this.contentDOMWrapper);
    }

    this.render(this.dom);

    return this;
  }

  render(container: HTMLElement) {
    const Component = () => {
      const componentRef = React.useRef(null);
      const cls = `emirror-${this.node.type.name}__reactComponent`;

      useEffect(() => {
        const componentDOM = componentRef.current as HTMLElement;
        if (componentDOM && this.contentDOM) {
          if (!this.node.isLeaf) {
            componentDOM.firstChild?.appendChild(this.contentDOM);
          }
        }
      }, [componentRef]);

      const NodeView = ({ children }) => (
        <div className={cls} ref={componentRef}>
          {children}
        </div>
      );
      const MarkView = ({ children }) => (
        <span className={cls} ref={componentRef}>
          {children}
        </span>
      );
      const ReactComponentView = () => (
        <ReactNodeViewContext.Provider
          value={{
            node: this.node,
            view: this.view,
            getPos: this.getPos,
            decorations: this.decorations,
          }}
        >
          <this.reactComponent />
        </ReactNodeViewContext.Provider>
      );
      return this.pluginType === 'node' ? (
        <NodeView>
          <ReactComponentView />
        </NodeView>
      ) : (
        <MarkView>
          <ReactComponentView />
        </MarkView>
      );
    };
    ReactDOM.render(<Component />, container);
  }

  /**
   * Create Container DOM for this.dom
   * @returns if PMNode is inline, then return span, else return div;
   */
  createContainerDOM(): HTMLElement {
    const containerDOM: HTMLElement =
      this.node.isInline === false
        ? document.createElement('div')
        : document.createElement('span');
    containerDOM.classList.add(`emirror-${this.node.type.name}__nodeview-dom`);
    return containerDOM;
  }

  /**
   * Create Content DOM for this.contentDOM
   * @returns if PMNode is leaf node, it returns null.
   */
  createContentDOM(): { contentDOM: Node; wrapper: HTMLElement } | null {
    if (this.pluginType !== 'node' && this.pluginType !== 'mark') {
      return null;
    }
    if (this.node.isLeaf) {
      return null;
    }
    const domSpec = this.node.type.spec.toDOM?.(this.node);
    if (!domSpec) {
      return null;
    }

    const { dom, contentDOM } = DOMSerializer.renderSpec(document, domSpec);

    if (!(dom.nodeType === Node.ELEMENT_NODE && dom instanceof Node)) {
      return null;
    }

    let wrapper = dom as HTMLElement;
    if (dom === contentDOM) {
      wrapper = document.createElement('span');
      wrapper.classList.add(
        `${kebabCase(this.node.type.name)}-node-view-content-wrapper`,
      );
      wrapper.append(contentDOM);
    }

    return { contentDOM, wrapper };
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
    return true;
  }

  /**
   * The function is called when the nodeView is destroy.
   */
  destroy() {
    ReactDOM.unmountComponentAtNode(this.dom);
    this.dom = undefined;
    this.contentDOM = undefined;
  }

  /**
   * The function is called when a DOM or selection
   * change happens within the nodeView
   */
  ignoreMutation(
    mutation: MutationRecord | { type: 'selection'; target: Element },
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
    ctx: ContextProps,
  ) => (
    node: PMNode,
    view: EditorView,
    getPos: (() => number) | boolean,
    decorations: Decoration[],
  ) => {
    const nodeView = new ReactNodeViews(
      node,
      view,
      getPos,
      decorations,
      ctx,
      reactComponent,
    ).init();
    ctx.renderProvider.flush();
    return nodeView;
  };
}

export const createReactNodeViews = ReactNodeViews.fromReactComponent;
