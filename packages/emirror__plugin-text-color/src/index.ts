import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';

class TextColor extends Mark {
  get name() {
    return 'textColor' as const;
  }

  get schema(): MarkSpec {
    return {
      attrs: {
        color: {},
      },
      parseDOM: [
        {
          tag: 'span[data-text-color]',
          getAttrs: (dom: HTMLElement) => {
            const color = dom.getAttribute('data-text-color');
            if (!color) {
              return;
            }
            return { color };
          },
        },
        {
          style: 'color',
          getAttrs: color => {
            if (typeof color !== 'string') {
              return;
            }
            return {
              color,
            };
          },
        },
      ],
      toDOM: mark => {
        const { attrs } = mark;
        const { color } = attrs;
        if (!color) {
          return ['span', { class: 'emirror-text-color' }, 0];
        }
        return [
          'span',
          {
            class: 'emirror-text-color',
            'data-text-color': color,
            style: `color: ${color};`,
          },
          0,
        ];
      },
    };
  }
}

export default TextColor;
