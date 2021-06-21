import { EditorState } from '@emirror/pm/state';
import { MarkType } from '@emirror/pm/model';
import { objectIncludes } from './objectIncludes';
import { getMarkType } from './getMarkType';

/**
 * get the active status about mark plugin at now selection.
 */
export const isMarkActiveType = (
  state: EditorState,
  typeOrName: string | MarkType,
  attrs: Record<string, any>,
) => {
  const { from, to, empty } = state.selection;
  const type = getMarkType(typeOrName, state.schema);

  // if selection is empty
  if (empty) {
    return Boolean(
      (state.storedMarks || state.selection.$from.marks())
        .filter((mark) => type.name === mark.type.name)
        .find((mark) => objectIncludes(mark.attrs, attrs)),
    );
  }
  // else if has selection
  return Boolean(state.doc.rangeHasMark(from, to, type));
};
