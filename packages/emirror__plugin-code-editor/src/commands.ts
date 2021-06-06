import { Command } from '@emirror/pm/commands';
import { Selection } from '@emirror/pm/state';

export function arrowHandler(dir: 'left' | 'down' | 'up' | 'right'): Command {
  return (state, dispatch, view) => {
    if (state.selection.empty && view.endOfTextblock(dir)) {
      const side = dir == 'left' || dir == 'up' ? -1 : 1;
      const { $head } = state.selection;
      const nextPos = Selection.near(
        state.doc.resolve(side > 0 ? $head.after() : $head.before()),
        side,
      );
      if (nextPos.$head && nextPos.$head.parent.type.name == 'codeEditor') {
        dispatch(state.tr.setSelection(nextPos));
        return true;
      }
    }
    return false;
  };
}
