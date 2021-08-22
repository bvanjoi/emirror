import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { PluginKey, PluginSpec } from '@emirror/pm/state';
import { parseDOMStyleAttribute } from '@emirror/utils';
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
        width: {
          default: 0,
        },
        height: {
          default: 0,
        },
      },
      group: 'block',
      // Because spec.content is empty, so it will be
      // a leaf node(which can't editable), and write `atom`
      // is `true` just for clarity.
      atom: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: (dom: HTMLElement) => {
            const style = parseDOMStyleAttribute(
              dom.getAttribute('style') || '',
            );
            return {
              src: dom.getAttribute('src'),
              width: parseInt(style.width as string, 10) || 0,
              height: parseInt(style.height as string, 10) || 0,
            };
          },
        },
      ],
      toDOM: node => {
        const { src, width, height } = node.attrs;
        return [
          'img',
          {
            src,
            style: `width: ${width}; height:${height};`,
            class: 'emirror-image',
          },
        ];
      },
    };
  }

  createPluginSpec = (): PluginSpec => ({
    key: new PluginKey(this.name),
    props: {
      nodeViews: {
        [this.name]: createImageNodeView(),
      },
    },
  });

  get commands() {
    return {
      insertImageAtNowPos: (url: string) =>
        insertImageAtNowPos(this.name, url),
    };
  }
}

export default Image;
export { uploadImageFromLocal };
