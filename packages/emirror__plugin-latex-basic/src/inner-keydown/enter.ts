import { EditorView } from '@emirror/pm/view';
import { chainCommands, newlineInCode } from '@emirror/pm/commands';
import collapseLatex from '../commands/collapse-latex';

export default function (outerView: EditorView) {
  return chainCommands(
    newlineInCode,
    collapseLatex(outerView, 'after', false),
  );
}
