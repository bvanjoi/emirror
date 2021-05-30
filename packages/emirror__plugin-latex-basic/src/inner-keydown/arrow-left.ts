import { EditorView } from '@emirror/pm/view';
import collapseLatex from '../commands/collapse-latex';

export default function (outerView: EditorView) {
  return collapseLatex(outerView, 'before', true);
}
