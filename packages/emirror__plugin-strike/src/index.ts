import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Strike extends Mark {
  get name() {
    return 'strike' as const;
  }

  createMarkSpec(): MarkSpec {
    return {
      parseDOM: [
        { tag: 's' },
        { tag: 'del' },
        {
          tag: 'text-decoration',
          getAttrs: n => (n === 'line-through' ? {} : false),
        },
      ],
      toDOM: () => ['s', { class: 'emirror-strike' }, 0],
    };
  }

  get commands() {
    return {
      toggleStrike: toggleMark(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-Shift-x': toggleMark(this.name),
      'Mod-Shift-X': toggleMark(this.name),
    };
  }

  inputRules = ({ type }) => [
    markInputRules(/(?:~~)([^*_]+)(?:~~)\x20$/, type),
  ];
}

export default Strike;
