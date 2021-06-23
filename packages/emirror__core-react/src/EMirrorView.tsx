import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import cls from 'classnames';
import { Node, Mark, Extension } from '@emirror/core-structure';
import { Manager } from '@emirror/core-manager';
import { EditorView } from '@emirror/pm/view';
import { EditorState, Transaction, Selection } from '@emirror/pm/state';
import { Schema, DOMParser } from '@emirror/pm/model';
import { inputRules } from '@emirror/pm/inputrules';
import { keymap } from '@emirror/pm/keymap';
import { ErrorMsg } from './constants';
import { useEmirrorContext } from './EMirrorContext';

/**
 * The EMirror Editor props;
 */
export type EMirrorProps = {
  /**
   * The class of Emirror.
   */
  className?: string;
  /**
   * The plugins for emirror. And the order of plugins is very
   * important, it may cover some keymap.
   */
  plugins: (Node | Mark | Extension)[];
  /**
   * The document top node. it point the basic struct of EMirror.
   */
  topNode: Node;
  /**
   * Can EMirror be editable? Default it's true.
   */
  editable?: boolean;
  /**
   * The action when editor init.
   */
  afterInit?: (view: EditorView) => void;
  /**
   * The action when editor update.
   */
  afterUpdate?: (view: EditorView) => void;
  /**
   * The action when editor destory.
   */
  beforeDestory?: (view: EditorView) => void;
  /**
   * the init content of this editor.
   */
  children?: React.ReactNode;
};

type EMirrorViewProps = EMirrorProps;

export const EMirrorView = (props: EMirrorViewProps) => {
  const {
    topNode,
    className,
    plugins: emPlugins = [],
    afterInit,
    afterUpdate,
    beforeDestory,
    editable = true,
    children,
  } = props;

  const [extensionsReactComponent, setExtensionsReactComponent] = useState(
    [],
  );

  /**
   * The ref of ProsemirrorView DOM.
   */
  const viewDOMRef = useRef<HTMLDivElement>(null);

  /**
   * The ref of ProsemirrorView.
   */
  const viewRef = useRef<EditorView>(null);

  /**
   * The init content ref of ReactNode
   */
  const contentRef = useRef<HTMLDivElement>(null);

  const emirrorContext = useEmirrorContext();
  const { viewProvider, pluginsProvider, analyticsProvider } =
    emirrorContext;

  useEffect(() => {
    if (!viewDOMRef.current) {
      return;
    }

    const view = init(viewDOMRef.current);
    // set Selection to the doc end.
    view.dispatch(
      view.state.tr.setSelection(Selection.atEnd(view.state.doc)),
    );

    view.focus();

    typeof afterInit === 'function' && afterInit(view);
    window.view = view;
    viewRef.current = view;
    viewProvider.init(view);

    return () => {
      typeof beforeDestory === 'function' && beforeDestory(view);
      view.destroy();
    };
  }, []);

  useEffect(() => {
    //! Why viewProvider.view return undefine?
    const view = viewRef.current;
    view?.update({
      ...view.props,
      editable: () => editable,
    });
  }, [editable]);

  /**
   * init the Prosemirror view.
   * @param ele - DOM element for prosemirror view construct.
   * @returns The view of Prosemirror.
   */
  const init = (ele: HTMLDivElement) => {
    emPlugins.unshift(topNode);
    const manager = new Manager(emPlugins);

    // nodes and marks of Prosemirror
    const { nodes, marks, names, plugins } = manager;

    /** Scheme of Prosemirror */
    const schema = new Schema({ nodes, marks, topNode: topNode.name });

    /** All nodeVies of Prosemirror */
    const nodeViews = manager.nodeAndMarkReactComponent(emirrorContext);

    /** All outer reactComponent  */
    const extensionReactComponent = manager.extensionsReactComponent();
    setExtensionsReactComponent(extensionReactComponent);

    /** All inputRules for Prosemirror */
    const rules = manager.inputRules(schema);
    // if input rules are not empty, then push it to plugins.
    rules.length && plugins.push(inputRules({ rules }));

    /** All key map for Prosemirror */
    const keymaps = manager.keymaps(schema);
    // if key map are not empty, then push it to plugins.
    Object.keys(keymaps).length && plugins.push(keymap(keymaps));

    /** init doc of editor */
    const doc = DOMParser.fromSchema(schema).parse(contentRef.current);

    /** The init state of Prosemirror */
    const state = EditorState.create({ schema, plugins, doc });

    return new EditorView(ele, {
      state,
      nodeViews,
      dispatchTransaction,
    });
  };

  /**
   * ! It must be use function rather than arrow function.
   * @param tr - the transactions produced by the view.
   */
  function dispatchTransaction(tr: Transaction) {
    const view = this as EditorView;
    if (!view) {
      console.error(ErrorMsg.INVALID_VIEW);
      return;
    }

    analyticsProvider.perf.warn('view', 'dispatchTransaction');

    analyticsProvider.perf.info(
      'view',
      'dispatchTransaction state::apply',
    );
    const newState = view.state.apply(tr);
    analyticsProvider.perf.stop(
      'view',
      'dispatchTransaction state::apply',
      200,
    );

    analyticsProvider.perf.warn('view', 'dispatchTransaction updateState');
    view.updateState(newState);
    analyticsProvider.perf.stop(
      'view',
      'dispatchTransaction updateState',
      100,
    );

    afterUpdate && afterUpdate(view);

    analyticsProvider.perf.stop('view', 'dispatchTransaction', 1000);
  }

  return (
    <div className={cls('emirror', className)}>
      <EMirrorInnerView ref={viewDOMRef} spellCheck='false'>
        <div ref={contentRef} style={{ display: 'none' }}>
          {children}
        </div>
      </EMirrorInnerView>
      {extensionsReactComponent?.map((rc, index) => (
        <div key={index}>{rc}</div>
      ))}
    </div>
  );
};

const EMirrorInnerView = styled.div`
  & > .ProseMirror {
    min-height: 140px;
  }

  & .ProseMirror {
    overflow-wrap: break-word;
    outline: none;
    white-space: pre-wrap;
    font-variant-ligatures: none;
    word-break: break-word;
  }
`;
