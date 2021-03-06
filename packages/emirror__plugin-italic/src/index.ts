import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Italic extends Mark {
  get name() {
    return 'italic' as const;
  }

  createMarkSpec(): MarkSpec {
    return {
      parseDOM: [
        { tag: 'em' },
        { tag: 'i' },
        { style: 'font-style=italic' },
      ],
      toDOM: () => ['em', { class: 'emirror-italic' }, 0],
    };
  }

  get commands() {
    return {
      toggleItalic: () => toggleMark(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-i': toggleMark(this.name),
      'Mod-I': toggleMark(this.name),
    };
  }

  inputRules = ({ type }) => [
    markInputRules(/(?:\*)([^*_]+)(?:\*)\x20$/, type),
  ];
}

export default Italic;
