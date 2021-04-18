import React, { useState, useRef, useEffect } from 'react';
import { useEmirrorContext } from './EMirrorContext';
import { Node, Mark, Extension } from '@emirror/core-structure';
import { Manager } from '@emirror/core-manager';
import { EditorView } from '@emirror/pm/view';
import { EditorState, Transaction } from '@emirror/pm/state';
import { Schema } from '@emirror/pm/model';
import { inputRules } from '@emirror/pm/inputrules';
import { ErrorMsg } from './constants';
import PortalRenderer from './PortalRenderer';
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

  const {
    viewProvider,
    pluginsProvider,
    portalProvider,
    analyticsProvider,
  } = useEmirrorContext();

  useEffect(() => {
    if (!viewRef.current) {
      return;
    }
    const view = init(viewRef.current);
    viewProvider.init(view);
    afterInit && afterInit(view);

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
    const { nodes, marks } = manager;
    /** All plugins of Prosemirror */
    const plugins = manager.plugins(pluginsProvider);
    /** All nodeVies of Prosemirror */
    const nodeViews = manager.nodeAndMarkReactComponent(
      portalProvider,
      pluginsProvider
    );
    /** All outer reactComponent  */
    const extensionReactComponent = manager.extensionsReactComponent();
    setExtensionsReactComponent(extensionReactComponent);
    /** Scheme of Prosemirror */
    const schema = new Schema({ nodes, marks });
    /** All inputRules for Prosemirror*/
    const rules = manager.inputRules(schema);
    inputRules.length && plugins.push(inputRules({ rules }));
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

    if (oldState === newState) {
      portalProvider.flush();
      return;
    }

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

    analyticsProvider.perf.debug('view', 'dispatchTransaction flush');
    portalProvider.flush();
    analyticsProvider.perf.stop(
      'view',
      'dispatchTransaction flush',
      100
    );

    afterUpdate && afterUpdate(view);

    analyticsProvider.perf.stop('view', 'dispatchTransaction', 1000);
  }

  // TODO style-component
  return (
    <React.Fragment>
      <div ref={viewRef} className="emirror" spellCheck="false" />
      {extensionsReactComponent?.map((rc, index) => (
        <div key={index}>{rc}</div>
      ))}
      <PortalRenderer />
    </React.Fragment>
  );
};
