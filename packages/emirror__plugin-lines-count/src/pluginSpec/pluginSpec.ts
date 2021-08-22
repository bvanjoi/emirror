import { PluginSpec, PluginKey } from '@emirror/pm/state';
import { DecorationSet, Decoration } from '@emirror/pm/view';
import './style.css';

const pluginSpec = (pluginKey: PluginKey<DecorationSet>): PluginSpec => ({
  key: pluginKey,
  state: {
    init() {
      return DecorationSet.empty;
    },
    apply(_tr, set, oldState, state) {
      if (state.doc.eq(oldState.doc)) {
        return set;
      }
      let decorations = [];
      state.doc.content.forEach((_node, offset, index) => {
        const widget = document.createElement('span');
        widget.classList.add('line-decoration');
        widget.setAttribute('data-index', `${index}`);
        decorations.push(Decoration.widget(offset + 1, widget));
      });
      return DecorationSet.create(state.doc, decorations);
    },
  },
  props: {
    decorations: state => pluginKey.getState(state),
  },
});

export { pluginSpec };
