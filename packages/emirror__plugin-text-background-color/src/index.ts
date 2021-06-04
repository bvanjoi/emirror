import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';

class TextBgColor extends Mark {
  get name() {
    return 'textBgColor' as const;
  }

  get schema(): MarkSpec {
    return {
      attrs: {
        bgColor: {},
      },
      parseDOM: [
        {
          tag: 'span[data-text-bg-color]',
          getAttrs: (dom: HTMLElement) => {
            const bgColor = dom.getAttribute('data-text-bg-color');
            if (!bgColor) {
              return;
            }
            return { bgColor };
          },
        },
        {
          style: 'background-color',
          getAttrs: (bgColor) => {
            if (typeof bgColor !== 'string') {
              return;
            }
            return {
              bgColor,
            };
          },
        },
      ],
      toDOM: (mark) => {
        const { attrs } = mark;
        const { bgColor } = attrs;
        if (!bgColor) {
          return ['span', { class: 'emirror-text-bg-color' }, 0];
        }
        return [
          'span',
          {
            class: 'emirror-text-bg-color',
            'data-text-bg-color': bgColor,
            style: `background-color: ${bgColor};`,
          },
          0,
        ];
      },
    };
  }
}

export default TextBgColor;
