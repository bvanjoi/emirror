import { EditorView } from '@emirror/pm/view';

export default function (outerView: EditorView) {
  return () => {
    outerView.dispatch(outerView.state.tr.insertText(''));
    outerView.focus();
    return true;
  };
}
