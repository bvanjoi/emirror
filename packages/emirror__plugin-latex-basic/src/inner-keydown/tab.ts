import { EditorState, Transaction } from '@emirror/pm/state';

export default function (
  state: EditorState,
  dispatch: (tr: Transaction) => void,
) {
  if (dispatch) {
    dispatch(state.tr.insertText('\t'));
  }
  return true;
}
