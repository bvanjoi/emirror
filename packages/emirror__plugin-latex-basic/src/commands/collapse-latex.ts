import { EditorView } from '@emirror/pm/view';
import { TextSelection } from '@emirror/pm/state';
import { Command } from '@emirror/pm/commands';

/**
 * Weather to exit latex node.
 *
 * @param outerView The view instance of outer editor.
 * @param dir indicate desired cursor position upon closing a latex node.
 * @param requireOnBorder An exit condition based on cursor position an direction
 * @param requireEmptySelection When true, only exit the latex node when the inner selection is empty
 * @returns A new PM Command base on the input config.
 */
export default function (
  outerView: EditorView,
  dir: 'before' | 'after',
  requireOnBorder: boolean,
  requireEmptySelection = true
): Command {
  return (innerState, dispatch) => {
    // get selection info
    const outerState = outerView.state;
    const { to: outerTo, from: outerFrom } = outerState.selection;
    const { to: innerTo, from: innerFrom } = innerState.selection;

    // only exit latex node when selection is empty.
    if (requireEmptySelection && innerTo !== innerFrom) {
      return false;
    }

    const currentPos = dir === 'after' ? innerTo : innerFrom;

    // when requireOnBorder is true, collapse only when cursor
    // is about to leave  the bounds of latex node
    if (requireOnBorder) {
      const size = innerState.doc.nodeSize - 2;

      // early return if exit conditions not met.
      if (dir === 'after' && currentPos < size) {
        return false;
      } else if (dir === 'before' && currentPos > 0) {
        return false;
      }
    }

    // all exit conditions met, so close the latex node by moving
    // the cursor outside.
    if (dispatch) {
      // set outer selection to be outside of the nodeview.
      const targetPos = dir === 'after' ? outerTo : outerFrom;
      outerView.dispatch(
        outerState.tr.setSelection(
          TextSelection.create(outerState.doc, targetPos)
        )
      );

      outerView.focus();
    }

    return true;
  };
}
