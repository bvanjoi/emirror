import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { DecorationSet } from 'prosemirror-view';
import { insertImageAtNowPos, uploadImageFromLocal } from './commands';
import { createImageNodeView } from './nodeview';

class Image extends Node {
  get name() {
    return 'image';
  }

  createNodeSpec(): NodeSpec {
    return {
      attrs: {
        src: {},
      },
      group: 'block',
      // Because spec.content is empty, so it will be
      // a leaf node(which can't editable), and write `atom`
      // is `true` just for clarity.
      atom: true,
      draggable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: (dom: HTMLElement) => ({
            src: dom.getAttribute('src'),
          }),
        },
      ],
      toDOM: node => {
        const { src } = node.attrs;
        return ['img', { src, class: 'emirror-image' }];
      },
    };
  }

  get plugin() {
    return new Plugin({
      props: {
        nodeViews: {
          [this.name]: createImageNodeView(),
        },
      },
    });
  }

  get commands() {
    return {
      insertImageAtNowPos: (url: string) =>
        insertImageAtNowPos(this.name, url),
    };
  }
}

export default Image;
export { uploadImageFromLocal };
