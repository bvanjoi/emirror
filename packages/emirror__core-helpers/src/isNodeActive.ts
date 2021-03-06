import { EditorState } from '@emirror/pm/state';
import { NodeType, Node as PMNode } from '@emirror/pm/model';
import { getNodeType } from './getNodeType';
import { objectIncludes } from '@emirror/utils';

export function isNodeActive(
  state: EditorState,
  typeOrName: string | NodeType | null,
  attrs: Record<string, any> = {},
) {
  if (!state) {
    return false;
  }
  /**
   * The type of specified node.
   */
  const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;

  const { from, to, empty } = state.selection;
  const nodeRanges: { node: PMNode; from: number; to: number }[] = [];

  state.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isText) {
      return;
    } else {
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      nodeRanges.push({
        node,
        from: relativeFrom,
        to: relativeTo,
      });
    }
  });
  const selectedNodeRanges = nodeRanges.filter(nodeRange => {
    if (!type) {
      return true;
    }
    return type.name === nodeRange.node.type.name;
  });

  if (empty) {
    // if selection is empty
    return Boolean(
      selectedNodeRanges.find(nodeRange =>
        objectIncludes(nodeRange.node.attrs, attrs),
      ),
    );
  }

  const selectionRange = to - from;
  const range = selectedNodeRanges
    .filter(nodeRange => objectIncludes(nodeRange.node.attrs, attrs))
    .reduce((sum, { from: _from, to: _to }) => sum + (_to - _from), 0);
  return range >= selectionRange;
}
