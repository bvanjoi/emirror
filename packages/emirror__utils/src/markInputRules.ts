import { MarkType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';

export const markInputRules = (
  regexp: RegExp,
  markType: MarkType,
  getAttributes?: Function
): InputRule =>
  new InputRule(regexp, (state, match, start, end) => {
    const attributes =
      getAttributes instanceof Function ? getAttributes(match) : getAttributes;
    const { tr } = state;
    const captureGroup = match[match.length - 1];
    const fullMatch = match[0];

    let markEnd = end;

    if (captureGroup) {
      const startSpaces = fullMatch.search(/\S/);
      const textStart = start + fullMatch.indexOf(captureGroup);
      const textEnd = textStart + captureGroup.length;

      if (textEnd < end) {
        tr.delete(textEnd, end);
      }
      if (textStart > start) {
        tr.delete(start + startSpaces, textStart);
      }
      markEnd = start + startSpaces + captureGroup.length;
      tr.addMark(start + startSpaces, markEnd, markType.create(attributes));
    }
    return tr;
  });
