import * as PMCommands from 'prosemirror-commands';
import { MarkType, NodeType, Schema } from 'prosemirror-model';
import { getMarkType, getNodeType } from '@emirror/core-helpers';

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

function setBlockType<S extends Schema = any>(
  nodeNameOrType: NodeType<S> | string,
  attrs?: { [key: string]: any },
): PMCommands.Command {
  return function (state, dispatch) {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    return PMCommands.setBlockType(nodeType, attrs)(state, dispatch);
  };
}

function wrapIn<S extends Schema = any>(
  nodeNameOrType: NodeType<S> | string,
  attrs?: { [key: string]: any },
): PMCommands.Command {
  return function (state, dispatch) {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    return PMCommands.wrapIn(nodeType, attrs)(state, dispatch);
  };
}

export * from 'prosemirror-commands';
export { toggleMark, setBlockType, wrapIn };
