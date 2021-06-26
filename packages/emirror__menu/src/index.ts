import { EditorState, Plugin, PluginKey } from '@emirror/pm/state';
import { EditorView } from '@emirror/pm/view';
import { Node, Mark } from '@emirror/core-structure';
import { isActive } from '@emirror/utils';

type Items = Record<string, Node | Mark>;

type Props = {
  items: Items;
  element: HTMLDivElement;
};

class MenuView {
  element: HTMLElement;
  items: Items;

  constructor(props: Props & { view: EditorView }) {
    this.element = props.element;
    this.items = props.items;
    this.update(props.view, null);
  }

  update(view: EditorView, prevState: EditorState) {
    if (
      prevState?.doc.eq(view.state.doc) &&
      prevState?.selection.eq(view.state.selection)
    ) {
      // If doc or selection had no any change
      // do nothing.
      return;
    }

    for (const ele of this.element.children) {
      const name = ele.getAttribute('data-plugin-name');
      if (!name) {
        continue;
      }

      const attrs =
        JSON.parse(ele.getAttribute('data-plugin-attrs')) || {};

      this.updateActivated(view, this.items[name], attrs, ele);
    }
  }

  /**
   * It will add/remove activated class name.
   */
  updateActivated(
    view: EditorView,
    item: Node | Mark,
    attrs: Record<string, any>,
    ele: Element,
  ) {
    if (isActive(view.state, item, attrs)) {
      ele.classList.add('activated');
    } else {
      ele.classList.remove('activated');
    }
  }
}

export default function (props: Props) {
  return new Plugin({
    key: new PluginKey('menu'),
    view(view) {
      return new MenuView({ ...props, view });
    },
  });
}