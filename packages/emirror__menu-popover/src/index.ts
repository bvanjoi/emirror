import { EditorState, Plugin, PluginKey } from '@emirror/pm/state';
import { EditorView } from '@emirror/pm/view';

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
    if (view.state.selection.empty) {
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
    const { from, to } = view.state.selection;
    const start = view.coordsAtPos(from);
    const end = view.coordsAtPos(to);
    const box = this.element.offsetParent.getBoundingClientRect();
    const left = Math.max((start.left + end.left) / 2, start.left + 3);
    this.element.style.left = left - box.left + 'px';
    this.element.style.bottom = box.bottom - start.top + 'px';
    this.element.style.transform = `translateX(-50%)`;
  }
}

export default function (opts: Options) {
  return new Plugin({
    key: new PluginKey('menu-popover'),
    view(view) {
      return new MenuView({ ...opts, view });
    },
    props: {
      handleDOMEvents: {
        blur(_view, event) {
          const { relatedTarget } = event;
          if (
            relatedTarget &&
            opts.element.parentNode?.contains(
              relatedTarget as globalThis.Node,
            )
          ) {
            return true;
          }
          opts.element.classList.add('hidden-menu');
          return false;
        },
      },
    },
  });
}
