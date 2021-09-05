import { NodeViewComponentProps } from '@emirror/core-structure';
import { NodeView, EditorView } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import './style.css';

type Options = NodeViewComponentProps;

export default class implements NodeView {
  /**
   * The DOM container image node.
   */
  dom: HTMLElement;

  constructor(public opts: Options) {
    this.init();
  }

  init() {
    this.dom = this.createImageDOM();
  }

  createImageDOM() {
    const dom = document.createElement('img');
    return dom;
  }
}
