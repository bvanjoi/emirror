import { NodeView, EditorView } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import {
  EditorState,
  PluginKey,
  TextSelection,
  Transaction
} from '@emirror/pm/state';
import katex, { KatexOptions, ParseError } from 'katex';
import { LatexPluginState } from './types';
import { StepMap } from '@emirror/pm/transform';
import { keymap } from '@emirror/pm/keymap';
import { history, redo, undo } from '@emirror/pm/history';
import tab from './inner-keydown/tab';
import backspace from './inner-keydown/backspace';
import enter from './inner-keydown/enter';
import arrowLeft from './inner-keydown/arrow-left';
import arrowRight from './inner-keydown/arrow-right';
import arrowUp from './inner-keydown/arrow-up';
import arrowDown from './inner-keydown/arrow-down';
import ctrlBackspace from './inner-keydown/ctrl-backspace';
import ctrlEnter from './inner-keydown/ctrl-enter';
import modShiftZ from './inner-keydown/mod-shift-z';
import modZ from './inner-keydown/mod-z';

interface ICursorPosObserver {
  /**
   * Indicate on which side cursor should appear when this node is selected.
   */
  side: 'start' | 'end';
  /**
   * update cursor position state
   */
  updateCursorPos(state: EditorState): void;
}

interface LatexViewOptions {
  /**
   * The options to config katex.
   */
  katexOptions?: KatexOptions;
}

type LatexNodeViewProps = {
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
   * Other options for nodeView
   */
  options: LatexViewOptions;
  /**
   * The latex plugin key.
   */
  pluginKey: PluginKey<LatexPluginState>;
};

class LatexNodeView implements NodeView, ICursorPosObserver {
  side: 'start' | 'end';
  /**
   * The Node of ProseMirror in the editor.
   */
  private node: PMNode;
  /**
   * A function get the node's position in editor.
   */
  private getPos: () => number;
  /**
   * The latex plugin key.
   */
  private pluginKey: PluginKey<LatexPluginState>;
  /**
   * The view of outer Editor.
   */
  private outerView: EditorView;
  /**
   * The view of inner latex Editor.
   */
  private innerView: EditorView;
  /**
   * It editing?
   */
  private isEditing: boolean;
  /**
   * katex options need to pass katex.
   */
  private katexOptions: KatexOptions;

  dom: HTMLElement;

  /**
   * The element for render latex.
   */
  private latexRenderElement: HTMLSpanElement;
  /**
   * The element for source latex
   */
  private latexSourceElement: HTMLSpanElement;

  // ------------------ init ------------------------------

  constructor(props: LatexNodeViewProps) {
    this.getPos = props.getPos;
    this.pluginKey = props.pluginKey;
    this.node = props.node;
    this.outerView = props.view;
    this.side = 'start';
    this.isEditing = false;
    this.katexOptions = Object.assign(
      { globalGroup: true, throwOnError: false },
      props.options.katexOptions
    );
    this.dom = this.createContainerDOM();

    const { latexRenderElement, latexSourceElement } = this.createContentDOM();
    this.latexRenderElement = latexRenderElement;
    this.latexSourceElement = latexSourceElement;

    this.dom.append(this.latexRenderElement);
    this.dom.append(this.latexSourceElement);

    this.dom.addEventListener('click', () => this.ensureFocus());
    this.renderLatex();
  }

  /**
   * Create Container DOM for this.dom
   * @returns if PMNode is inline, then return span, else return div;
   */
  createContainerDOM(): HTMLElement {
    const containerDOM: HTMLElement =
      this.node.isInline === false ?
        document.createElement('div') :
        document.createElement('span');
    containerDOM.classList.add(`emirror-${this.node.type.name}__nodeview-dom`);
    containerDOM.classList.add('emirror-latex-node');

    if (this.katexOptions.displayMode) {
      containerDOM.classList.add('emirror-latex-node-block');
    } else {
      containerDOM.classList.add('emirror-latex-node-inline');
    }
    return containerDOM;
  }

  /**
   * Create Content DOM for this.contentDOM
   * @returns if PMNode is leaf node, it returns null.
   */
  createContentDOM(): {
    latexRenderElement: HTMLSpanElement;
    latexSourceElement: HTMLSpanElement;
  } {
    // if inline, then both span
    // else both div.
    const latexRenderElement = this.katexOptions.displayMode ?
      document.createElement('div') :
      document.createElement('span');
    latexRenderElement.textContent = '';
    latexRenderElement.classList.add('emirror-latex-render');

    const latexSourceElement = this.katexOptions.displayMode ?
      document.createElement('div') :
      document.createElement('span');
    latexSourceElement.classList.add('emirror-latex-source');

    return { latexRenderElement, latexSourceElement };
  }

  /**
   * Ensure focus on the inner editor whenever this node has focus.
   * This helps to prevent accidental deletions of latex block.
   */
  ensureFocus() {
    if (this.innerView && this.outerView.hasFocus()) {
      this.innerView.focus();
    }
  }
  // ------------------ render ------------------------------

  renderLatex() {
    if (!this.latexRenderElement) {
      return;
    }

    // get latex string to render
    // @ts-ignore
    const content = this.node.content.content as PMNode[];

    let textString = '';
    if (content.length > 0 && content[0].textContent !== null) {
      textString = content[0].textContent.trim();
    }

    // empty
    if (textString.length < 1) {
      this.dom.classList.add('empty-latex');
      // this node is in an invalid state, so clear it.
      while (this.latexRenderElement.firstChild) {
        this.latexRenderElement.firstChild.remove();
      }
      return;
    } else {
      this.dom.classList.remove('empty-latex');
    }

    try {
      katex.render(textString, this.latexRenderElement, this.katexOptions);
    } catch (err) {
      if (err instanceof ParseError) {
        this.latexRenderElement.classList.add('latex-parse-error');
        this.dom.setAttribute('title', err.toString());
      } else {
        throw err;
      }
    }
  }

  // ------------------ update ------------------------------
  update(node: PMNode): boolean {
    if (!node.sameMarkup(this.node)) {
      return false;
    }
    this.node = node;

    if (this.innerView) {
      const { state } = this.innerView;
      const start = node.content.findDiffStart(state.doc.content);
      if (state) {
        const diff = node.content.findDiffEnd(state.doc.content);
        if (diff) {
          let { a: endA, b: endB } = diff;
          const overLap = start - Math.min(endA, endB);
          if (overLap > 0) {
            endA += overLap;
            endB += overLap;
          }
          this.innerView.dispatch(
            state.tr
              .replace(start, endB, node.slice(start, endA))
              .setMeta('fromOutside', true)
          );
        }
      }
    }
    if (!this.isEditing) {
      this.renderLatex();
    }

    return true;
  }

  updateCursorPos(state: EditorState<any>): void {
    const pos = this.getPos();
    const { nodeSize } = this.node;
    const inPMSelection =
      state.selection.from < pos + nodeSize && pos < state.selection.to;

    if (!inPMSelection) {
      this.side = pos < state.selection.from ? 'end' : 'start';
    }
  }

  // ------------------ event ------------------------------

  selectNode() {
    // debugger;
    this.dom.classList.add('emirror-select-node');
    if (!this.isEditing) {
      this.openEditor();
    }
  }

  deselectNode() {
    this.dom.classList.remove('emirror-select-node');
    if (this.isEditing) {
      this.closeEditor();
    }
  }

  stopEvent(event: Event) {
    if (this.innerView && event.target) {
      return this.innerView.dom.contains(event.target as Node);
    }
    return false;
  }

  ignoreMutation() {
    return true;
  }

  // ------------------ destroy ------------------------------

  destroy() {
    this.closeEditor(false);
    // clean dom elements
    if (this.latexRenderElement) {
      this.latexRenderElement.remove();
      delete this.latexRenderElement;
    }
    if (this.latexSourceElement) {
      this.latexSourceElement.remove();
      delete this.latexSourceElement;
    }
    this.dom.remove();
  }

  // ------------------ inner PM ------------------------------

  dispatchInner = (tr: Transaction) => {
    if (!this.innerView) {
      return;
    }
    const { state, transactions } = this.innerView.state.applyTransaction(tr);
    this.innerView.updateState(state);

    if (!tr.getMeta('fromOutside')) {
      const outerTr = this.outerView.state.tr;
      const offsetMap = StepMap.offset(this.getPos() + 1);
      for (let i = 0; i < transactions.length; i++) {
        const { steps } = transactions[i];
        for (let j = 0; j < steps.length; j++) {
          const mapped = steps[j].map(offsetMap);
          if (!mapped) {
            throw Error('step discarded');
          }
          outerTr.step(mapped);
        }
      }
      if (outerTr.docChanged) {
        this.outerView.dispatch(outerTr);
      }
    }
  };

  openEditor() {
    if (this.innerView) {
      throw Error('inner editor had exist');
    }
    this.innerView = new EditorView(this.latexSourceElement, {
      state: EditorState.create({
        doc: this.node,
        plugins: [
          history(),
          keymap({
            Tab: tab,
            Backspace: backspace(this.node, this.outerView),
            Enter: enter(this.outerView),
            ArrowLeft: arrowLeft(this.outerView),
            ArrowRight: arrowRight(this.outerView),
            ArrowUp: arrowUp(this.outerView),
            ArrowDown: arrowDown(this.outerView),
            'Ctrl-Backspace': ctrlBackspace(this.outerView),
            'Ctrl-Enter': ctrlEnter(this.outerView),
            'Mod-z': modZ,
            'Mod-Shift-z': modShiftZ,
          }),
        ],
      }),
      dispatchTransaction: this.dispatchInner,
    });

    // focus element
    this.innerView.focus();

    // request pos that cursor should appear within the expanded latex node
    const innerState = this.innerView.state;
    const maybePos = this.pluginKey.getState(this.outerView.state)
      ?.prevCursorPos;
    if (!maybePos) {
      console.error(
        '[latex-node]: Error: Unable to fetch latex plugin state from key'
      );
    }
    const prevCursorPos = maybePos ?? 0;

    // compute position that cursor should appear within the expanded latex node
    const innerPos =
      prevCursorPos <= this.getPos() ? 0 : this.node.content.size;

    this.innerView.dispatch(
      innerState.tr.setSelection(
        TextSelection.create(innerState.doc, innerPos)
      )
    );

    this.isEditing = true;
  }

  /**
   * Called when the inner ProseMirror Editor closed.
   *
   * @param render Optionally update the rendered latex after closing, which
   * is generally what we want to do, since the using is done editing.
   */
  closeEditor(render = true) {
    if (this.innerView) {
      this.innerView.destroy();
      this.innerView = undefined;
    }

    if (render) {
      this.renderLatex();
    }
    this.isEditing = false;
  }
}

export default LatexNodeView;
