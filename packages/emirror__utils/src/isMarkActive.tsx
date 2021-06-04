import { EditorState } from '@emirror/pm/state';
import { MarkType, Mark } from '@emirror/pm/model';
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
  if (empty) {
    return Boolean(
      (state.storedMarks || state.selection.$from.marks())
        .filter((mark) => type.name === mark.type.name)
        .find((mark) => objectIncludes(mark.attrs, attrs)),
    );
  }

  let selectionRange = 0;
  const markRanges: { mark: Mark; from: number; to: number }[] = [];

  state.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isText) {
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      const range = relativeTo - relativeFrom;
      selectionRange += range;
      markRanges.push(
        ...node.marks.map((mark) => ({
          mark,
          from: relativeFrom,
          to: relativeTo,
        })),
      );
    }
  });

  if (selectionRange === 0) {
    return false;
  }

  const range = markRanges
    .filter((markRange) => type.name === markRange.mark.type.name)
    .filter((markRange) => objectIncludes(markRange.mark.attrs, attrs))
    .reduce((sum, { from, to }) => sum + (to - from), 0);
  return range >= selectionRange;
};
