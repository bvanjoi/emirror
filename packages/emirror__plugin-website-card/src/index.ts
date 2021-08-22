import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { PluginKey, PluginSpec } from '@emirror/pm/state';
import './style.css';

class WebsiteCard extends Node {
  websiteCardPluginKey = new PluginKey(this.name);

  get name() {
    return 'websiteCard' as const;
  }

  createNodeSpec(): NodeSpec {
    return {
      attrs: {
        href: {
          default: '',
        },
      },
      group: 'block',
      parseDOM: [
        {
          tag: 'div.emirror-website-card',
          getAttrs: (dom: Element) => ({
            href: dom.getAttribute('data-href') || '',
          }),
        },
      ],
      toDOM: node => [
        'div',
        { class: 'emirror-website-card', 'data-href': node.attrs.href },
      ],
    };
  }

  createPluginSpec(): PluginSpec {
    return {
      key: this.websiteCardPluginKey,
      props: {
        nodeViews: {
          [this.name]: (node, view, getPos) => {
            const { href } = node.attrs;
            // dom
            const dom = document.createElement('div');
            dom.setAttribute('data-href', href);
            dom.classList.add('emirror-website-card');

            dom.addEventListener('click', () => {
              window.open(href);
            });

            // left
            const leftDiv = document.createElement('div');
            leftDiv.classList.add('left', 'content');

            const titleSpan = document.createElement('span');
            titleSpan.classList.add('title');

            const contentSpan = document.createElement('span');
            contentSpan.classList.add('desc');

            const hrefSpan = document.createElement('span');
            hrefSpan.classList.add('href');

            leftDiv.append(titleSpan, contentSpan, hrefSpan);

            // right
            const rightDiv = document.createElement('div');
            rightDiv.classList.add('right', 'image');

            dom.append(leftDiv, rightDiv);
            const contentDOM = document.createElement('span');
            return {
              dom,
              contentDOM,
            };
          },
        },
      },
    };
  }
}

export default WebsiteCard;
