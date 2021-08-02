import { EditorView, NodeView } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';

class TodoItemView implements NodeView {
  private node: PMNode;
  private view: EditorView;
  private getPos: boolean | (() => number);
  dom: Element;
  contentDOM: Element;

  constructor(
    node: PMNode,
    view: EditorView,
    getPos: boolean | (() => number),
  ) {
    this.node = node;
    this.view = view;
    this.getPos = getPos;
    this.init();
  }
  /**
   * Init the DOM
   */
  init() {
    const { node, view, getPos } = this;
    /**
     * dom
     */
    const listItem = document.createElement('li');
    const { checked } = node.attrs;

    listItem.classList.add('emirror-todo-item');
    listItem.setAttribute('data-checked', checked);

    /**
     * checkbox item
     */
    const checkbox = document.createElement('span');
    checkbox.classList.add('emirror-todo-item-checkbox');
    checkbox.addEventListener('click', () => {
      if (typeof getPos === 'boolean') {
        return;
      }

      view.dispatch(
        view.state.tr.setNodeMarkup(getPos(), undefined, {
          checked: !checked,
        }),
      );
    });

    //
    const contentDOM = document.createElement('span');
    contentDOM.classList.add('emirror-todo-item-content');

    // append to DOM
    listItem.append(checkbox, contentDOM);

    this.dom = listItem;
    this.contentDOM = contentDOM;
  }

  update(node: PMNode): boolean {
    if (node.type === this.node.type) {
      return false;
    }
    return true;
  }
}

export default TodoItemView;
