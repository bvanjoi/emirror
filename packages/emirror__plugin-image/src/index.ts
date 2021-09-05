import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { parseDOMStyleAttribute } from '@emirror/utils';
import { insertImageAtNowPos } from './commands';
import { ImageUploader } from './plugins';
import { ImageOptions } from './types';
import './style.css';

const defaultOptions: Pick<
  ImageOptions,
  'placeHolderImageSrc' | 'types' | 'genID'
> = {
  genID: () => Math.random().toString(36).substring(7),
  placeHolderImageSrc:
    "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'/%3E\n",
  types: ['image/jpeg', 'image/gif', 'image/png', 'image/jpg'],
};

class Image extends Node {
  get name() {
    return 'image';
  }

  constructor(public opts: ImageOptions) {
    super();
  }

  createNodeSpec(): NodeSpec {
    return {
      attrs: {
        src: {},
        width: {
          default: 100,
        },
        height: {
          default: 100,
        },
        uploadID: {
          default: null,
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
              width: parseInt(style.width as string, 10) || 100,
              height: parseInt(style.height as string, 10) || 100,
              uploadID: dom.getAttribute('uploadID'),
            };
          },
        },
      ],
      toDOM: node => {
        const { src, width, height, uploadID } = node.attrs;
        return [
          'img',
          {
            src,
            style: `width: ${width}px; height:${height}px;`,
            class: 'emirror-image',
            uploadID,
          },
        ];
      },
    };
  }

  addPlugin() {
    return [
      ImageUploader({
        ...defaultOptions,
        ...this.opts,
        name: this.name,
      }),
    ];
  }

  get commands() {
    return {
      insertImageAtNowPos: (url: string) =>
        insertImageAtNowPos(this.name, url),
    };
  }
}

export default Image;
export { default as upload } from './upload';
