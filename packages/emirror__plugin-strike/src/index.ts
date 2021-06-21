import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Strike extends Mark {
  get name() {
    return 'strike' as const;
  }

  get schema(): MarkSpec {
    return {
      parseDOM: [
        { tag: 's' },
        { tag: 'del' },
        {
          tag: 'text-decoration',
          getAttrs: (n) => (n === 'line-through' ? {} : false),
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

  keymap = ({ type }) => ({
    'Mod-Shift-x': toggleMark(type),
    'Mod-Shift-X': toggleMark(type),
  });

  inputRules = ({ type }) => [
    markInputRules(/(?:~~)([^*_]+)(?:~~)\x20$/, type),
  ];
}

export default Strike;
