import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

export class Italic extends Mark {
  get name() {
    return 'italic' as const;
  }

  get schema(): MarkSpec {
    return {
      parseDOM: [
        { tag: 'em' },
        { tag: 'i' },
        { style: 'font-style=italic' },
      ],
      toDOM: () => ['em', { class: 'emirror-italic' }, 0],
    };
  }

  keymap = ({ type }) => ({
    'Mod-i': toggleMark(type),
    'Mod-I': toggleMark(type),
  });

  inputRules = ({ type }) => [
    markInputRules(/(?:\*)([^*_]+)(?:\*)\x20$/, type),
  ];
}
