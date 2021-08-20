import { EditorState } from '@emirror/pm/state';
import { MarkType } from '@emirror/pm/model';
import { objectIncludes } from '@emirror/utils';
import { getMarkType } from './getMarkType';

/**
 * Get the active status about PMMark plugin at now selection.
 */
export function isMarkActive(
  state: EditorState,
  typeOrName: string | MarkType | null,
  attrs: Record<string, any> = {},
) {
  if (!state) {
    return false;
  }
  /**
   * The type of specified mark.
   */
  const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;

  const { from, to, empty } = state.selection;

  if (empty) {
    // if selection is empty
    return Boolean(
      (state.storedMarks || state.selection.$from.marks())
        .filter(mark => {
          if (!type) {
            return true;
          }
          return type.name === mark.type.name;
        })
        .find(mark => objectIncludes(mark.attrs, attrs)),
    );
  }
  if (!type) {
    return false;
  }
  return Boolean(state.doc.rangeHasMark(from, to, type));
}
