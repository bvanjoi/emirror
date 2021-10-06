import { Extension } from '@emirror/core-structure';
import { PluginKey, PluginSpec } from '@emirror/pm/state';
import { Decoration, DecorationSet } from '@emirror/pm/view';
import './style.css';

/**
 * The option type of placeholder
 */
type PlaceholderOptions = {
  /**
   * which content do you want?
   */
  content: string;
};

class Placeholder extends Extension {
  placeholderKey = new PluginKey(this.name);

  constructor(
    public options: PlaceholderOptions = {
      content: 'default placeholder content',
    },
  ) {
    super();
  }

  get name() {
    return 'placeholder' as const;
  }

  createPluginSpec(): PluginSpec {
    return {
      key: this.placeholderKey,
      props: {
        decorations: state => {
          const { doc, selection } = state;
          const { anchor } = selection;

          if (doc.childCount > 1) {
            return;
          }

          const pos = 0;
          const emptyNodeSize = 2;
          const hasAnchor = anchor >= pos && anchor <= pos + emptyNodeSize;
          if (!hasAnchor) {
            return;
          }

          const decoration = Decoration.node(pos, pos + emptyNodeSize, {
            class: 'emirror-placeholder',
            'data-placeholder-content': this.options.content,
          });

          return DecorationSet.create(doc, [decoration]);
        },
      },
    };
  }
}

export default Placeholder;
