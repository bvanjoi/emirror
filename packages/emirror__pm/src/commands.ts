import * as PMCommands from 'prosemirror-commands';
import { MarkType, Schema } from 'prosemirror-model';
import { getMarkType } from '@emirror/utils';

/**
 * // Extends the type to nameOrType.
 *
 * Create a command function that toggles the given mark with the
 * given attributes. Will return `false` when the current selection
 * doesn't support that mark. This will remove the mark if any marks
 * of that type exist in the selection, or add it otherwise. If the
 * selection is empty, this applies to the [stored
 * marks](#state.EditorState.storedMarks) instead of a range of the
 * document.
 */
function toggleMark<S extends Schema = any>(
  markNameOrType: MarkType<S> | string,
  attrs?: { [key: string]: any },
): PMCommands.Command {
  return function (state, dispatch) {
    const markType = getMarkType(markNameOrType, state.schema);
    return PMCommands.toggleMark(markType, attrs)(state, dispatch);
  };
}

export * from 'prosemirror-commands';
export { toggleMark };
