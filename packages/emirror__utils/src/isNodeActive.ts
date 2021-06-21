import { EditorState } from '@emirror/pm/state';
import { NodeType, Node as PMNode } from '@emirror/pm/model';
import { getNodeType } from './getNodeType';
import { objectIncludes } from './objectIncludes';

/**
 * get the active status about node plugin at now selection.
 */
export const isNodeActiveType = (
  state: EditorState,
  typeOrName: string | NodeType,
  attrs: Record<string, any>,
) => {
  const { from, to, empty } = state.selection;
  const type = getNodeType(typeOrName, state.schema);

  const nodeRanges: { node: PMNode; from: number; to: number }[] = [];

  state.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isText) {
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      nodeRanges.push({
        node,
        from: relativeFrom,
        to: relativeTo,
      });
    }
  });

  if (empty) {
    return Boolean(
      nodeRanges
        .filter((nodeRange) => {
          if (!type) {
            return true;
          }
          return type.name === nodeRange.node.type.name;
        })
        .find((nodeRange) =>
          objectIncludes(nodeRange.node.attrs, attrs),
        ),
    );
  }

  const selectionRange = to - from;

  const range = nodeRanges
    .filter((nodeRange) => type.name === nodeRange.node.type.name)
    .filter((nodeRange) =>
      objectIncludes(nodeRange.node.attrs, attrs),
    )
    .reduce((sum, { from, to }) => sum + (to - from), 0);

  return range >= selectionRange;
};
