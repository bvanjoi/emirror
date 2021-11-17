import Manager from '@emirror/core-manager';
import { Node, Mark, Extension, Config } from '@emirror/core-structure';
import { EditorView } from '@emirror/pm/view';
import { EditorState, Transaction } from '@emirror/pm/state';
import { Schema, DOMParser } from '@emirror/pm/model';
import { inputRules } from '@emirror/pm/inputrules';
import { keymap } from '@emirror/pm/keymap';
import { Command } from '@emirror/pm/commands';
import { isEmptyObject, createLogger } from '@emirror/utils';
import { checkViewPlugin } from '@emirror/core-helpers';
import { startMeasure, stopMeasure, clearMeasure } from '@emirror/core-performance';

/**
 * The option of Editor used
 */
export type EMirrorOptions = {
  /**
   * The DOM contain PM, default it will create div tag.
   */
  container?: HTMLElement;
  /**
   * The plugins for emirror. And the order of plugins is very
   * important, it may cover some keymap.
   */
  emPlugins: (Node | Mark | Extension)[];
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
  afterInit?: (emirror: EMirror) => void;
  /**
   * The action when editor update.
   */
  afterUpdate?: (emirror: EMirror) => void;
  /**
   * The action when editor destroy.
   */
  beforeDestroy?: (emirror: EMirror) => void;
};

export default class EMirror {
  /**
   * The instance of PM.
   */
  view: EditorView;
  /**
   * The emPlugin.
   */
  emPlugins: Record<string, Node | Mark | Extension>;
  /**
   * The commands extract from emPlugins.
   */
  commands: Record<string, (...args: any[]) => Command>;
  /**
   * Some config.
   */
  config: Config;

  constructor(public opts: EMirrorOptions) {
    this.config = {
      logger: createLogger()
    }

    const manager = new Manager([opts.topNode, ...opts.emPlugins], this.config);

    const { plugins, keymaps, commands } = manager;

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

    let statePlugins = plugins.filter(plugin => !checkViewPlugin(plugin));
    let viewPlugins = plugins.filter(plugin => checkViewPlugin(plugin));

    /**
     * The init state of PM
     */
    const state = EditorState.create({ schema, plugins: statePlugins });

    /**
     * The view of PM
     */
    const view = new EditorView(
      opts.container || document.createElement('div'),
      {
        state,
        editable: () => opts.editable ?? true,
        dispatchTransaction: this.dispatchTransaction,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // new feature: https://prosemirror.net/docs/ref/#view.DirectEditorProps.plugins
        plugins: viewPlugins,
      },
    );

    this.view = view;
    this.commands = commands;
    this.emPlugins = Object.fromEntries(
      opts.emPlugins.map(emPlugin => [emPlugin.name, emPlugin]),
    );
    this.opts.afterInit?.(this);
    this.view.focus();
  }

  /**
   * Send tr.
   * @param tr PM state transaction
   */
  private dispatchTransaction = (tr: Transaction) => {
    startMeasure('dispatchTransaction');
    const newState = this.view.state.apply(tr);
    this.view.updateState(newState);
    this.opts.afterUpdate?.(this);
    stopMeasure('dispatchTransaction', (duration) => {
      console.log(duration);
    })
  };

  /**
   * Run PM Command
   */
  runCommand(command: Command) {
    return command(this.view.state, this.view.dispatch, this.view);
  }

  /**
   * Reset editor content from HTML
   */
  setContentFromHtml(contentDOM: HTMLElement) {
    const docNode = DOMParser.fromSchema(this.view.state.schema).parse(
      contentDOM,
    );

    const from = 0;
    const end = this.view.state.doc.content.size;
    const tr = this.view.state.tr.replaceRangeWith(from, end, docNode);
    this.view.dispatch(tr);
  }

  /**
   * Destroy EMirror editor.
   */
  destroy() {
    clearMeasure('dispatchTransaction');
    this.opts.beforeDestroy?.(this);
    this.view.destroy();
  }
}
