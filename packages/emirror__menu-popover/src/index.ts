import { EditorState, Plugin, PluginKey } from '@emirror/pm/state';
import { EditorView } from '@emirror/pm/view';
import { Node, Mark } from '@emirror/core-structure';
import { isActive } from '@emirror/utils';

type Items = Record<string, Node | Mark>;

type Props = {
  /**
   * all plugins of EMirror
   */
  items: Items;
  /**
   * The element of container
   */
  element: HTMLDivElement;
};

class MenuView {
  /**
   * The element of container
   */
  element: HTMLElement;
  /**
   * all plugins of EMirror
   */
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

    if (this.updateHidden(view)) {
      return;
    }

    this.updatePosStyle(view);

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
   * It will add/remove hidden class name.
   */
  updateHidden(view: EditorView): boolean {
    if (view.state.selection.empty) {
      this.element.classList.add('hidden');
      return true;
    }

    this.element.classList.remove('hidden');
    return false;
  }

  /**
   * Update container position style
   */
  updatePosStyle(view: EditorView) {
    const { from, to } = view.state.selection;
    const start = view.coordsAtPos(from);
    const end = view.coordsAtPos(to);
    const box = this.element.offsetParent.getBoundingClientRect();
    const left = Math.max((start.left + end.left) / 2, start.left + 3);
    this.element.style.left = left - box.left + 'px';
    this.element.style.bottom = box.bottom - start.top + 'px';
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
    key: new PluginKey('menu-popover'),
    view(view) {
      return new MenuView({ ...props, view });
    },
    props: {
      handleDOMEvents: {
        blur(_view, event) {
          const { relatedTarget } = event;
          if (
            relatedTarget &&
            props.element.parentNode?.contains(
              relatedTarget as globalThis.Node,
            )
          ) {
            return true;
          }
          props.element.classList.add('hidden');
          return false;
        },
      },
    },
  });
}
