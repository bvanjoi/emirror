import CodeMirror from 'codemirror';
import { EditorView, NodeView } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import { isMac } from '@emirror/utils';
import { Selection, TextSelection } from '@emirror/pm/state';
import { exitCode } from '@emirror/pm/commands';
import { redo, undo } from '@emirror/pm/history';
import './style.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

interface CodeEditorOptions {
  /**
   * the language of this codeEditor
   */
  language: string;
}

type CodeEditorNodeViewProps = {
  /**
   * The Node of ProseMirror in the editor.
   */
  node: PMNode;
  /**
   * The instance of ProseMirror.
   */
  view: EditorView;
  /**
   * A function get the node's position in editor.
   */
  getPos: () => number;
  /**
   * Option for code editor
   */
  options: CodeEditorOptions;
};

class CodeEditorView implements NodeView {
  /**
   * The view of EMirror.
   */
  private view: EditorView;
  /**
   * The Node of ProseMirror in the editor.
   */
  private node: PMNode;
  /**
   * A function get the node's position in editor.
   */
  private getPos: () => number;

  dom: HTMLElement;
  contentDOM: HTMLElement;

  /**
   * weather changed
   */
  private incomingChanges: boolean;
  /**
   * This flag is used to avoid an update loop
   * between EMirror and CodeMirror
   */
  private updating: boolean;

  /**
   * Instance of CodeMirror.
   */
  private cm: CodeMirror.Editor;

  // ------------------ init ------------------------------

  /**
   * The latex plugin key.
   */
  constructor(props: CodeEditorNodeViewProps) {
    this.view = props.view;
    this.node = props.node;
    this.getPos = props.getPos;
    this.incomingChanges = false;

    this.dom = document.createElement('div');
    this.dom.classList.add(`emirror-${this.node.type.name}__nodeview-dom`);

    this.cm = CodeMirror(this.dom, {
      value: this.node.textContent,
      lineNumbers: true,
      extraKeys: this.codeMirrorKeymap(),
      mode: props.options.language,
    });

    // CodeMirror needs to be in the DOM to properly initialize,
    // so schedule it to update itself.
    setTimeout(() => {
      this.cm.refresh();
    }, 10);

    this.updating = false;

    this.cm.on('beforeChange', () => (this.incomingChanges = true));

    this.cm.on('cursorActivity', () => {
      if (!this.updating && !this.incomingChanges) {
        this.forwardSelection();
      }
    });

    this.cm.on('changes', () => {
      if (!this.updating) {
        this.valueChanged();
        this.forwardSelection();
      }
      this.incomingChanges = false;
    });

    this.cm.on('focus', () => this.forwardSelection());
  }

  // ------------------ codemirror event ------------------------------

  asPMSelection(doc: PMNode) {
    const offset = this.getPos() + 1;
    const anchor =
      this.cm.indexFromPos(this.cm.getCursor('anchor')) + offset;
    const head = this.cm.indexFromPos(this.cm.getCursor('head')) + offset;
    return TextSelection.create(doc, anchor, head);
  }

  forwardSelection() {
    if (!this.cm.hasFocus()) {
      return;
    }
    const { state } = this.view;
    const selection = this.asPMSelection(state.doc);
    if (!selection.eq(state.selection)) {
      this.view.dispatch(state.tr.setSelection(selection));
    }
  }

  computeChange(oldVal: string, newVal: string) {
    if (oldVal === newVal) {
      return null;
    }
    let start = 0;
    let oldEnd = oldVal.length;
    let newEnd = newVal.length;

    while (
      start < oldEnd &&
      oldVal.charCodeAt(start) === newVal.charCodeAt(start)
    ) {
      start += 1;
    }
    while (
      oldEnd > start &&
      newEnd > start &&
      oldVal.charCodeAt(oldEnd - 1) === newVal.charCodeAt(newEnd - 1)
    ) {
      oldEnd -= 1;
      newEnd -= 1;
    }
    return {
      from: start,
      to: oldEnd,
      text: newVal.slice(start, newEnd),
    };
  }

  valueChanged() {
    const change = this.computeChange(
      this.node.textContent,
      this.cm.getValue(),
    );
    if (change) {
      const start = this.getPos() + 1;
      const tr = this.view.state.tr.replaceWith(
        start + change.from,
        start + change.to,
        change.text ? this.view.state.schema.text(change.text) : null,
      );
      this.view.dispatch(tr);
    }
  }

  maybeEscape(unit: 'line' | 'char', dir: 1 | -1) {
    const pos = this.cm.getCursor();
    if (
      this.cm.somethingSelected() ||
      pos.line !== (dir < 0 ? this.cm.firstLine() : this.cm.lastLine()) ||
      (unit === 'char' &&
        pos.ch !== (dir < 0 ? 0 : this.cm.getLine(pos.line).length))
    ) {
      return CodeMirror.Pass;
    }
    this.view.focus();
    const targetPos = this.getPos() + (dir < 0 ? 0 : this.node.nodeSize);
    const selection = Selection.near(
      this.view.state.doc.resolve(targetPos),
      dir,
    );
    this.view.dispatch(
      this.view.state.tr.setSelection(selection).scrollIntoView(),
    );
    this.view.focus();
  }

  codeMirrorKeymap() {
    const { view } = this;

    const mod = isMac ? 'Cmd' : 'Ctrl';
    return CodeMirror.normalizeKeyMap({
      Up: () => this.maybeEscape('line', -1),
      Left: () => this.maybeEscape('char', -1),
      Down: () => this.maybeEscape('line', 1),
      Right: () => this.maybeEscape('char', 1),
      [`${mod}-Enter`]: () => {
        if (exitCode(view.state, view.dispatch)) {
          view.focus();
        }
      },
      [`${mod}-z`]: () => undo(view.state, view.dispatch),
      [`Shift-${mod}-z`]: () => redo(view.state, view.dispatch),
      [`${mod}-y`]: () => redo(view.state, view.dispatch),
    });
  }

  // ------------------ pm event ------------------------------

  setSelection(anchor: number, head: number) {
    this.cm.focus();
    this.updating = true;
    this.cm.setSelection(
      this.cm.posFromIndex(anchor),
      this.cm.posFromIndex(head),
    );
    this.updating = false;
  }

  update = (node: PMNode<any>): boolean => {
    if (node.type !== this.node.type) {
      return false;
    }
    this.node = node;
    const change = this.computeChange(
      this.cm.getValue(),
      node.textContent,
    );
    if (change) {
      this.updating = true;
      this.cm.replaceRange(
        change.text,
        this.cm.posFromIndex(change.from),
        this.cm.posFromIndex(change.to),
      );
      this.updating = false;
    }
    return true;
  };

  selectNode = () => {
    this.cm.focus();
  };
}

export default CodeEditorView;
