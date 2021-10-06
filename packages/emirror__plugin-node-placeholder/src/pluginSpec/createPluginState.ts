import { StateField } from '@emirror/pm/state';
import { DecorationSet, Decoration } from '@emirror/pm/view';
import { MetaData } from '../types';

export default function (): StateField<DecorationSet> {
  return {
    init() {
      // Just use `DecorationSet` to store position( because `DecorationSet` had mapping.)
      // Do not render
      return DecorationSet.empty;
    },
    apply(tr, value, oldState) {
      let set = value.map(tr.mapping, tr.doc);
      let action = tr.getMeta(this) as MetaData;
      if (!action) {
        return set;
      } else if (action.type === 'add') {
        if (!action.pos) {
          throw Error('action.pos must had value');
        }
        const wight = document.createElement('span');
        let deco = Decoration.widget(action.pos, wight, {
          id: action.id,
        });
        set = set.add(tr.doc, [deco]);
      } else if (action.type === 'remove') {
        set = set.remove(
          set.find(null, null, spec => spec.id === action.id),
        );
      }

      return set;
    },
  };
}
