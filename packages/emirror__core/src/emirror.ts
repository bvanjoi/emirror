import Manager from '@emirror/core-manager';
import { Node, Mark, Extension } from '@emirror/core-structure';
import { EditorView } from '@emirror/pm/view';
import { EditorState, Transaction } from '@emirror/pm/state';
import { Schema, DOMParser } from '@emirror/pm/model';
import { inputRules } from '@emirror/pm/inputrules';
import { keymap } from '@emirror/pm/keymap';
import { isEmptyObject } from '@emirror/utils';

export type EMirrorOptions = {
  /**
   * The DOM contain PM.
   */
  container: HTMLElement;
  /**
   * Init Content DOM.
   */
  contentEle?: HTMLElement;
  /**
   * The plugins for emirror. And the order of plugins is very
   * important, it may cover some keymap.
   */
  plugins: (Node | Mark | Extension)[];
  /**
   * The document top node. It point the basic structure of EMirror.
   */
  topNode: Node;
  /**
   * Can EMirror editable?
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
   * The action when editor destroy.
   */
  beforeDestroy?: (view: EditorView) => void;
};

export default class EMirror {
  view: EditorView;
  opts: EMirrorOptions;

  constructor(opts: EMirrorOptions) {
    this.opts = opts;
    const manager = new Manager([opts.topNode, ...opts.plugins]);

    const { plugins, keymaps } = manager;

    /**
     * nodes of PM
     */
    const nodes = manager.createNodes();

    /**
     * marks of PM
     */
    const marks = manager.createMarks();

    /**
     * Scheme of PM
     */
    const schema = new Schema({
      nodes,
      marks,
      topNode: opts.topNode.name,
    });

    /**
     * All inputRules for PM
     */
    const rules = manager.inputRules(schema);

    // if input rules are not empty, then push it to plugins.
    rules.length && plugins.push(inputRules({ rules }));

    // if key map are not empty, then push it to plugins.
    !isEmptyObject(keymaps) && plugins.push(keymap(keymaps));

    /**
     * Init doc of PM
     */
    const doc = opts.contentEle
      ? DOMParser.fromSchema(schema).parse(opts.contentEle)
      : undefined;

    /**
     * The init state of PM
     */
    const state = EditorState.create({ schema, plugins, doc });

    /**
     * The view of PM
     */
    const view = new EditorView(opts.container, {
      state,
      dispatchTransaction: this.dispatchTransaction,
    });

    this.view = view;
    this.opts.afterInit?.(this.view);
    this.view.focus();
  }

  /**
   * Send tr.
   * @param tr PM state transaction
   */
  private dispatchTransaction = (tr: Transaction) => {
    const newState = this.view.state.apply(tr);
    this.view.updateState(newState);
    this.opts.afterUpdate?.(this.view);
  };

  /**
   * Set Editable.
   * @param editable Can Editable?
   */
  setEditable(editable: boolean) {
    this.view.update({
      ...this.view.props,
      editable: () => editable,
    });
  }

  /**
   * Destroy EMirror editor.
   */
  destroy() {
    this.opts.beforeDestroy?.(this.view);
    this.view.destroy();
  }
}
