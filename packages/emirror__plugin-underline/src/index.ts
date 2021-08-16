import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Underline extends Mark {
  get name() {
    return 'underline' as const;
  }

  createMarkSpec(): MarkSpec {
    return {
      parseDOM: [
        { tag: 'u' },
        {
          tag: 'text-decoration',
          getAttrs: n => (n === 'underline' ? {} : false),
        },
      ],
      toDOM: () => ['u', { class: 'emirror-underline' }, 0],
    };
  }

  get commands() {
    return {
      toggleUnderline: () => toggleMark(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-u': toggleMark(this.name),
      'Mod-U': toggleMark(this.name),
    };
  }

  inputRules = ({ type }) => [
    markInputRules(/(?:~)([^*_]+)(?:~)\x20$/, type),
  ];
}

export default Underline;
