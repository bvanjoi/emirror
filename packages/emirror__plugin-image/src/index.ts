import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { Command } from '@emirror/pm/commands';
import { Plugin } from '@emirror/pm/state';
import { insertImageAtNowPos } from './commands';
import './style.css';

class Image extends Node {
  get name() {
    return 'image';
  }

  get schema(): NodeSpec {
    return {
      attrs: {
        src: {},
      },
      group: 'block',
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

  get plugins() {
    return [
      new Plugin({
        props: {
          nodeViews: {
            [this.name]: node => {
              const { src } = node.attrs;
              // dom
              const dom = document.createElement('img');

              dom.setAttribute('src', src);
              dom.classList.add('emirror-image');

              dom.classList.add('loading');
              dom.addEventListener('load', () => {
                dom.classList.remove('loading');
              });

              return {
                dom,
              };
            },
          },
        },
      }),
    ];
  }

  get commands() {
    return {
      insertImageAtNowPos: (url: string): Command =>
        insertImageAtNowPos(this.name, url),
    };
  }
}

export default Image;
