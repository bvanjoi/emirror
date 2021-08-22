import { Extension } from '@emirror/core-structure';
import { PluginKey, PluginSpec } from '@emirror/pm/state';
import { Decoration, DecorationSet } from '@emirror/pm/view';
import './style.css';

class NodePlaceholder extends Extension {
  nodePlaceholderKey = new PluginKey<DecorationSet>(this.name);
  get name() {
    return 'nodePlaceholder';
  }

  createPluginSpec = (): PluginSpec<DecorationSet> => ({
    key: this.nodePlaceholderKey,
    state: {
      init() {
        return DecorationSet.empty;
      },
      apply: (tr, _set) => {
        let set = _set.map(tr.mapping, tr.doc);
        const action = tr.getMeta(this.nodePlaceholderKey);
        if (action?.add) {
          const widget = document.createElement('div');
          widget.classList.add('node-placeholder');
          const deco = Decoration.widget(action.add.pos, widget, {
            id: action.add.id,
          });
          set = set.add(tr.doc, [deco]);
        } else if (action?.remove) {
          set = set.remove(
            set.find(null, null, spec => spec.id === action.remove.id),
          );
        }
        return set;
      },
    },
    props: {
      decorations: state => this.nodePlaceholderKey.getState(state),
    },
  });
}

export default NodePlaceholder;
