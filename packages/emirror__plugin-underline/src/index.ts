import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

class Underline extends Mark {
  get name() {
    return 'underline' as const;
  }

  get schema(): MarkSpec {
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

  keymap = ({ type }) => ({
    'Mod-u': toggleMark(type),
    'Mod-U': toggleMark(type),
  });

  inputRules = ({ type }) => [markInputRules(/(?:~)([^*_]+)(?:~)\x20$/, type)];
}

export default Underline;
