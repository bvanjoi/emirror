import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { getNodeType, insertNode } from '@emirror/utils';
import { EditorView } from '@emirror/pm/view';
import './style.css';

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
      toDOM: (node) => {
        const { src, alt, title } = node.attrs;
        return ['img', { src, alt, title, class: 'emirror-image' }];
      },
    };
  }

  get commands() {
    return {
      insertImageAtNowPos: (url: string, view: EditorView) => {
        const nodeType = getNodeType(this.name, view.state.schema);
        const imageNode = nodeType.create({
          src: url,
        });
        return insertNode(imageNode)(view.state, view.dispatch);
      },
    };
  }
}

export default Image;
