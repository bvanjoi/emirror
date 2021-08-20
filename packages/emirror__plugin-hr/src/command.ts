import { chainCommands, Command } from '@emirror/pm/commands';
import { TextSelection } from '@emirror/pm/state';
import { insertNode } from '@emirror/utils';
import { getNodeType } from '@emirror/core-helpers';

export function insertHR(nodeName: string): Command {
  return (state, dispatch, view) => {
    const nodeType = getNodeType(nodeName, state.schema);
    const node = nodeType.create();
    return chainCommands(insertNode(node), focusToNext)(
      state,
      dispatch,
      view,
    );
  };
}

/**
 * After insert a node, it will try to focus next line of this node.
 */
const focusToNext: Command = (state, dispatch) => {
  const { tr } = state;
  if (dispatch) {
    const { parent, pos } = tr.selection.$from;
    const posAfter = pos + 1;
    const nodeAfter = tr.doc.nodeAt(posAfter);

    // end of document
    if (!nodeAfter) {
      const node = parent.type.contentMatch.defaultType?.create();

      if (node) {
        tr.insert(posAfter, node);
        tr.setSelection(TextSelection.create(tr.doc, posAfter));
      }
    }

    dispatch(tr.scrollIntoView());
  }

  return true;
};
