import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Node, Mark, Extension } from '@emirror/core-structure';
import { Manager } from '@emirror/core-manager';
import { EditorView } from '@emirror/pm/view';
import { EditorState, Transaction } from '@emirror/pm/state';
import { Schema } from '@emirror/pm/model';
import { inputRules } from '@emirror/pm/inputrules';
import { keymap } from '@emirror/pm/keymap';
import { ErrorMsg } from './constants';
import { useEmirrorContext } from './EMirrorContext';

/**
 * The EMirror Editor props;
 */
export type EMirrorProps = {
  /**
   *  The plugins for emirror.
   */
  plugins: (Node | Mark | Extension)[];
  /**
   * Is show performance analytics?
   */
  showAnalytics?: boolean;
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
};

type EMirrorViewProps = EMirrorProps;

export const EMirrorView = (props: EMirrorViewProps) => {
  const {
    plugins: emPlugins = [],
    afterInit,
    afterUpdate,
    beforeDestory,
    showAnalytics = false,
  } = props;

  const [
    extensionsReactComponent,
    setExtensionsReactComponent,
  ] = useState([]);

  /**
   * The ref of ProsemirrorView.
   */
  const viewRef = useRef<HTMLDivElement>(null);

  const emirrorContext = useEmirrorContext();
  const {
    viewProvider,
    pluginsProvider,
    analyticsProvider,
  } = emirrorContext;

  useEffect(() => {
    if (!viewRef.current) {
      return;
    }
    const view = init(viewRef.current);
    view.focus();
    afterInit && afterInit(view);
    viewProvider.init(view);

    return () => {
      beforeDestory(viewProvider.view);
      viewProvider.view.destroy();
    };
  }, []);

  /**
   * init the Prosemirror view.
   * @param ele - DOM element for prosemirror view construct.
   * @returns The view of Prosemirror.
   */
  const init = (ele: HTMLDivElement) => {
    const manager = new Manager(emPlugins);
    // nodes and marks of Prosemirror
    const { nodes, marks, names } = manager;

    /** Scheme of Prosemirror */
    const schema = new Schema({ nodes, marks });

    /** All plugins of Prosemirror */
    const plugins = manager.plugins(pluginsProvider);

    /** All nodeVies of Prosemirror */
    const nodeViews = manager.nodeAndMarkReactComponent(
      emirrorContext
    );

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

    /** The init state of Prosemirror */
    const state = EditorState.create({ schema, plugins });

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
    const oldState = view.state;
    analyticsProvider.perf.info(
      'view',
      'dispatchTransaction state::apply'
    );

    const newState = view.state.apply(tr);
    analyticsProvider.perf.stop(
      'view',
      'dispatchTransaction state::apply',
      200
    );

    analyticsProvider.perf.warn(
      'view',
      'dispatchTransaction updateState'
    );
    view.updateState(newState);
    analyticsProvider.perf.stop(
      'view',
      'dispatchTransaction updateState',
      100
    );

    afterUpdate && afterUpdate(view);

    analyticsProvider.perf.stop('view', 'dispatchTransaction', 1000);
  }

  return (
    <div className="emirror">
      <EMirrorInnerView>
        <div ref={viewRef} spellCheck="false" />
      </EMirrorInnerView>
      {extensionsReactComponent?.map((rc, index) => (
        <div key={index}>{rc}</div>
      ))}
    </div>
  );
};

const EMirrorInnerView = styled.div`
  & .ProseMirror {
    min-height: 140px;
    overflow-wrap: break-word;
    outline: none;
    padding: 10px;
    white-space: pre-wrap;
    font-variant-ligatures: none;
  }
`;
