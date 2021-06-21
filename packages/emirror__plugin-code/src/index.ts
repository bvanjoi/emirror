import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Code extends Mark {
  get name() {
    return 'code' as const;
  }

  get schema(): MarkSpec {
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

  keymap = ({ type }) => ({
    'Mod-Ctrl-c': toggleMark(type),
    'Mod-Ctrl-C': toggleMark(type),
  });

  inputRules = ({ type }) => [
    markInputRules(/(?:`)([^*_]+)(?:`)\x20$/, type),
  ];
}

export default Code;
