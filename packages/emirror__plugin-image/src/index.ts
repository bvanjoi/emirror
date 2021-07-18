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

  createNodeSpec(): NodeSpec {
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
              const imgDOM = document.createElement('img');

              imgDOM.setAttribute('src', src);
              imgDOM.classList.add('emirror-image');

              imgDOM.classList.add('loading');
              imgDOM.addEventListener('load', () => {
                imgDOM.classList.remove('loading');
              });

              return {
                dom: imgDOM,
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
