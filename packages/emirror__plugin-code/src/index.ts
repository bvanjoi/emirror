import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Code extends Mark {
  get name() {
    return 'code' as const;
  }

  createMarkSpec(): MarkSpec {
    return {
      parseDOM: [{ tag: 'code' }],
      toDOM: () => ['code', { class: 'emirror-code' }, 0],
    };
  }

  get commands() {
    return {
      toggleCode: toggleMark(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-Ctrl-c': toggleMark(this.name),
      'Mod-Ctrl-C': toggleMark(this.name),
    };
  }

  inputRules = ({ type }) => [
    markInputRules(/(?:`)([^*_]+)(?:`)\x20$/, type),
  ];
}

export default Code;
