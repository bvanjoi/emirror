import { Extension } from '@emirror/core-structure';
import { PluginKey, Plugin } from '@emirror/pm/state';
import { Decoration, DecorationSet } from '@emirror/pm/view';
import './style.css';

/**
 * The option type of exceed-tip.
 */
type ExceedTipOptions = {
  /**
   * Max number of this doc.
   */
  maxSize: number;
};

class ExceedTip extends Extension {
  exceedTipKey = new PluginKey(this.name);
  options: ExceedTipOptions = {
    maxSize: 140,
  };

  constructor(options: ExceedTipOptions) {
    super();
    this.options = options;
  }

  get name() {
    return 'placeholder' as const;
  }

  plugins = () => [
    new Plugin({
      key: this.exceedTipKey,
      props: {
        decorations: state => {
          const { doc } = state;
          const { lastChild } = doc;

          if (!lastChild) {
            return;
          }

          if (doc.textContent.length <= this.options.maxSize) {
            return;
          }

          const pos = doc.content.size - lastChild.nodeSize;

          let className = 'emirror-exceed-tip ';
          if (lastChild.isTextblock && !lastChild.textContent.length) {
            // this if-else stat aims to format content
            className += 'before';
          } else {
            className += 'after';
          }

          const decoration = Decoration.node(pos, pos + lastChild.nodeSize, {
            class: className,
            'data-exceed-tip-content': `${doc.textContent.length}/${this.options.maxSize}`,
          });

          return DecorationSet.create(doc, [decoration]);
        },
      },
    }),
  ];
}

export default ExceedTip;
