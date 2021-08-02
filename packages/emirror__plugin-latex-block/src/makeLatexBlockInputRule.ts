import { NodeType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';

export default function (
  pattern: RegExp,
  nodeType: NodeType,
  getAttrs?: (match: string[]) => any,
) {
  return new InputRule(pattern, (state, match, start, end) => {
    const $start = state.doc.resolve(start);
    const attrs =
      getAttrs instanceof Function ? getAttrs(match) : getAttrs;

    if (
      !$start
        .node(-1)
        .canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType)
    ) {
      return null;
    }

    /**
     * The paragraph node.
     */
    const node = $start.parent;
    /**
     * The parent start position
     */
    const parentStartPos = $start.start();

    const { tr } = state;

    tr.delete(end - 2, end).delete(start, start + 2);

    if (end - parentStartPos !== node.content.size) {
      // after is not empty.
      tr.split(tr.mapping.map(end));
    }

    if (parentStartPos !== start) {
      // before is not empty.
      tr.split(tr.mapping.map(start));
    }

    return tr.setBlockType(
      tr.mapping.map(start),
      tr.mapping.map(start),
      nodeType,
      attrs,
    );
  });
}
