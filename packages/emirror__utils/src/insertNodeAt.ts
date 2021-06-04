import { Node as PMNode } from '@emirror/pm/model';
import { Selection } from '@emirror/pm/state';
import { Command } from '@emirror/pm/commands';

export function insertNodeAt(selection: Selection, node: PMNode): Command {
  return (state, dispatch) => {
    if (dispatch) {
      const { from, to } = selection;
      const tr = state.tr.replaceWith(from, to, node);
      dispatch(tr);
    }
    return true;
  };
}
