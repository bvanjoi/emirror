import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { PluginSpec } from '@emirror/pm/state';

type LinkOptions = {
  /**
   *
   * @default true;
   */
  autoLink: boolean;
};

class Link extends Mark {
  get name() {
    return 'link';
  }

  createMarkSpec(): MarkSpec {
    return {
      attrs: {
        href: {},
      },
      inclusive: false,
      parseDOM: [
        {
          tag: 'a[href]',
          getAttrs: (node: Element) => {
            const href = node.getAttribute('href');
            return {
              href,
            };
          },
        },
      ],
      toDOM: node => [
        'a',
        { class: 'emirror-link', href: node.attrs.href },
        0,
      ],
    };
  }

  createPluginSpec(): PluginSpec {
    return {
      props: {
        handleClick: (view, pos) => {
          const node = view.state.doc.resolve(pos).nodeBefore;
          if (!node) {
            return false;
          }
          const linkMark = node.marks.find(
            mark => mark.type.name === this.name,
          );
          if (!linkMark) {
            return false;
          }
          const { href } = linkMark.attrs;
          if (href) {
            window.open(href, '_blank');
            return true;
          }
          return false;
        },
      },
    };
  }
}

export default Link;
