import { Plugin, PluginKey } from '@emirror/pm/state';
import { EditorView } from '@emirror/pm/view';
import { isActive } from '../../emirror__utils/src';
import { Items } from './types';

type Props = {
  items: Items;
  element: HTMLDivElement;
};

class MenuView {
  view: EditorView;
  element: HTMLElement;
  items: Items;

  constructor(props: Props & { view: EditorView }) {
    this.view = props.view;
    this.element = props.element;
    this.items = props.items;
    this.update();
  }

  update() {
    for (const ele of this.element.children) {
      const name = ele.getAttribute('data-plugin-name');
      if (!name) {
        continue;
      }

      const attrs = ele.getAttribute('data-plugin-attrs') || {};
      if (isActive(this.view.state, this.items[name], attrs)) {
        ele.classList.add('is-active');
      } else {
        ele.classList.remove('is-active');
      }
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
