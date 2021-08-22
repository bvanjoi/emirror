import { EditorState, Plugin, PluginKey } from '@emirror/pm/state';
import { EditorView } from '@emirror/pm/view';
import { Node, Mark } from '@emirror/core-structure';
import { isActive } from '@emirror/utils';

type Items = Record<string, Node | Mark>;

type Options = {
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

  constructor(opts: Options & { view: EditorView }) {
    this.element = opts.element;

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
      this.element.classList.add('hidden-menu');
      return true;
    }

    this.element.classList.remove('hidden-menu');
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
}

export default function (opts: Options) {
  return new Plugin({
    key: new PluginKey('menu-float'),
    view(view) {
      return new MenuView({ ...opts, view });
    },
  });
}
