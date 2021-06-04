import { NodeType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';

export function nodeInputRules(
  regexp: RegExp,
  type: NodeType,
  getAttributes?: (match: any) => any,
) {
  return new InputRule(regexp, (state, match, start, end) => {
    const attrs =
      getAttributes instanceof Function ? getAttributes(match) : getAttributes;
    const { tr } = state;

    if (match[0]) {
      tr.replaceWith(start - 1, end, type.create(attrs));
    }
    return tr;
  });
}
