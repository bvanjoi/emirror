import { EditorState, Plugin, PluginKey } from '@emirror/pm/state';
import { EditorView } from '@emirror/pm/view';
import { Node, Mark } from '@emirror/core-structure';
import { isActive } from '@emirror/utils';

type Items = Record<string, Node | Mark>;

type Options = {
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

  constructor(opts: Options & { view: EditorView }) {
    this.element = opts.element;
    this.items = opts.items;

    this.update(opts.view, null);
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
    const { selection } = view.state;
    const { $from, empty } = selection;
    const { parent } = $from;
    /**
     * is out node is outermost node?
     */
    const isRootDepth = $from.depth === 1;
    /**
     * is node is empty?
     * if true, pos must in front of this node.
     */
    const isNodeEmpty = !parent.isLeaf && !parent.textContent;
    if (!(empty && isRootDepth && isNodeEmpty)) {
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
    const { from } = view.state.selection;
    const start = view.coordsAtPos(from);
    const box = this.element.offsetParent.getBoundingClientRect();
    // 13 is a trike
    // it come from the h tag's height.
    this.element.style.top =
      (start.bottom + start.top) / 2 - box.top - 13 + 'px';
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

export default function (opts: Options) {
  return new Plugin({
    key: new PluginKey('menu-float'),
    view(view) {
      return new MenuView({ ...opts, view });
    },
  });
}
