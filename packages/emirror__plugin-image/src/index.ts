import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { Command } from '@emirror/pm/commands';
import './style.css';
import { insertImageAtNowPos } from './commands';

class Image extends Node {
  get name() {
    return 'image';
  }

  get schema(): NodeSpec {
    return {
      attrs: {
        src: {},
        alt: { default: null },
        title: { default: null },
      },
      group: 'block',
      draggable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: (dom: HTMLElement) => ({
            src: dom.getAttribute('src'),
            title: dom.getAttribute('title'),
            alt: dom.getAttribute('alt'),
          }),
        },
      ],
      toDOM: node => {
        const { src, alt, title } = node.attrs;
        return ['img', { src, alt, title, class: 'emirror-image' }];
      },
    };
  }

  get commands() {
    return {
      insertImageAtNowPos: (url: string): Command =>
        insertImageAtNowPos(this.name, url),
    };
  }
}

export default Image;
