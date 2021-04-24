import { EditorState } from '@emirror/pm/state';
import { Mark } from '@emirror/pm/model';

export const getMarksBetween = (
  from: number,
  to: number,
  state: EditorState
) => {
  let marks: { from: number; to: number; mark: Mark }[] = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    marks = [
      ...marks,
      ...node.marks.map(mark => ({
        from: pos,
        to: pos + node.nodeSize,
        mark,
      })),
    ];
  });
  return marks;
};
