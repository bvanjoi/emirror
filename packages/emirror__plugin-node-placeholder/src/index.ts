import { Extension } from '@emirror/core-structure';
import { EditorState, Plugin, PluginKey } from '@emirror/pm/state';
import { Decoration, DecorationSet } from '@emirror/pm/view';

class NodePlaceholder extends Extension {
  nodePlaceholderKey = new PluginKey<DecorationSet>(this.name);

  get name() {
    return 'nodePlaceholder';
  }

  get plugin() {
    return new Plugin<DecorationSet>({
      key: this.nodePlaceholderKey,
      state: {
        init() {
          return DecorationSet.empty;
        },
        apply(tr, _set) {
          let set = _set;
          set = set.map(tr.mapping, tr.doc);
          const action = tr.getMeta(this);
          if (action?.add) {
            const widget = document.createElement('node-placeholder');
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
        decorations(state) {
          return this.getState(state);
        },
      },
    });
  }

  get commands() {
    const findPlaceholder = (state: EditorState, id: string) => {
      const decos = this.nodePlaceholderKey.getState(state);
      const found = decos.find(null, null, spec => spec.id === id);
      return found.length ? found[0].from : null;
    };
    return {
      findPlaceholder,
    };
  }
}

export default NodePlaceholder;
