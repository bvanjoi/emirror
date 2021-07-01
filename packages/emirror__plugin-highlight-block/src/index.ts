import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { Plugin, PluginKey } from '@emirror/pm/state';
import './style.css';

type Props = {
  emojis: string[];
};

class HighlightBlock extends Node {
  emojis: string[] = [];
  highlightBlockPluginKey = new PluginKey(this.name);

  constructor(props: Props) {
    super();
    this.emojis = props.emojis;
  }

  get name() {
    return 'highlightBlock' as const;
  }

  createNodeSpec(): NodeSpec {
    return {
      attrs: {
        emoji: {
          default: '✨',
        },
      },
      group: 'block',
      content: '(paragraph|bulletList|orderList)+',
      parseDOM: [
        {
          tag: 'div.emirror-highlight-block',
          getAttrs: (n: Element) => ({
            emoji: n.getAttribute('data-emoji') || '✨',
          }),
        },
      ],
      toDOM: n => [
        'div',
        { class: 'emirror-highlight-block', 'data-emoji': n.attrs.emoji },
        0,
      ],
      selectable: false,
    };
  }

  get plugins() {
    return [
      new Plugin({
        key: this.highlightBlockPluginKey,
        props: {
          nodeViews: {
            [this.name]: (node, view, getPos) => {
              // dom
              const highlightBlockDOM = document.createElement('div');
              highlightBlockDOM.classList.add('emirror-highlight-block');
              // emoji Item
              const { emoji } = node.attrs;

              const emojiItem = document.createElement('span');
              emojiItem.classList.add('emirror-highlight-emoji');
              emojiItem.setAttribute('data-emoji', emoji);

              emojiItem.addEventListener('click', () => {
                if (typeof getPos === 'boolean') {
                  return;
                }
                view.dispatch(
                  view.state.tr.setNodeMarkup(getPos(), undefined, {
                    emoji:
                      this.emojis[
                        Math.floor(Math.random() * this.emojis.length)
                      ],
                  }),
                );
              });
              // contentDOM
              const contentDOM = document.createElement('div');
              contentDOM.classList.add('emirror-highligh-block-content');

              // append to dom
              highlightBlockDOM.append(emojiItem, contentDOM);

              return {
                dom: highlightBlockDOM,
                contentDOM,
              };
            },
          },
        },
      }),
    ];
  }
}

export default HighlightBlock;
