import { NodeView, EditorView } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import './style.css';

type ImageNodeViewProps = {
  /**
   * The Node of ProseMirror in the editor
   */
  node: PMNode;
  /**
   * The view of PM
   */
  view: EditorView;
  /**
   * The position of  image node
   */
  getPos: () => number;
};

class ImageNodeView implements NodeView {
  /**
   * The Node of ProseMirror in the editor
   */
  #node: PMNode;
  /**
   * The view of PM
   */
  #view: EditorView;
  /**
   * The position of image node
   */
  #getPos: () => number;
  /**
   * The DOM container image node
   */
  dom: HTMLElement;

  constructor(props: ImageNodeViewProps) {
    this.#node = props.node;
    this.#view = props.view;
    this.#getPos = props.getPos;

    this.init();
  }

  init() {
    // this.dom = this.createContainerDOM();
    // this.dom.append(this.createImageDOM());
    // this.dom.append(this.createResizeBox());

    this.dom = this.createImageDOM();
  }

  /**
   * Create container DOM for image node
   */
  createContainerDOM(): HTMLElement {
    const containerDOM = document.createElement('div');
    containerDOM.classList.add(
      `emirror-${this.#node.type.name}__nodeview-dom`,
    );
    containerDOM.classList.add('emirror-image-node');
    return containerDOM;
  }

  /**
   * Content dom contain the image
   */
  createImageDOM() {
    const { src } = this.#node.attrs;
    const imgDOM = document.createElement('img');
    imgDOM.setAttribute('src', src);
    imgDOM.classList.add('emirror-image');
    return imgDOM;
  }

  createResizeBox() {
    const container = document.createElement('span');
    container.classList.add('emirror-image-resize-box-container');

    // box dom ----
    const topLeft = document.createElement('span');
    topLeft.classList.add('emirror-image-resize-box', 'top_left');
    const topRight = document.createElement('span');
    topRight.classList.add('emirror-image-resize-box', 'top_right');
    const bottomLeft = document.createElement('span');
    bottomLeft.classList.add('emirror-image-resize-box', 'bottom_left');
    const bottomRight = document.createElement('span');
    bottomRight.classList.add('emirror-image-resize-box', 'bottom_right');

    container.append(topLeft, topRight, bottomLeft, bottomRight);
    return container;
  }
}

export default ImageNodeView;
