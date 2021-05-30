import { EditorView } from '@emirror/pm/view';
import { EditorState } from '@emirror/pm/state';
import { chainCommands, deleteSelection } from '@emirror/pm/commands';
import { Node as PMNode } from '@emirror/pm/model';

export default function (node: PMNode, outerView: EditorView) {
  return chainCommands(deleteSelection, (state: EditorState) => {
    // default backspace behavior for non-empty selection.
    if (!state.selection.empty) {
      return false;
    }
    // default backspace behavior when latex node is non-empty
    if (node.textContent.length) {
      return false;
    }
    // otherwise, delete the empty latex node and focus the outer editor.
    outerView.dispatch(outerView.state.tr.insertText(''));
    outerView.focus();
    return true;
  });
}
