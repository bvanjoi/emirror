import { NodeType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';

export default function (
  pattern: RegExp,
  nodeType: NodeType,
  getAttrs?: (match: string[]) => any
) {
  return new InputRule(pattern, (state, match, start, end) => {
    const $start = state.doc.resolve(start);
    const index = $start.index();

    const $end = state.doc.resolve(end);

    const attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    if (!$start.parent.canReplaceWith(index, $end.index(), nodeType)) {
      return null;
    }

    if (end - start === 4 && match[0] === '$$$$ ') {
      return null;
    }
    console.log('hit', end - start, match[0]);

    return state.tr.replaceRangeWith(
      start,
      end,
      nodeType.create(attrs, nodeType.schema.text(match[1]))
    );
  });
}
