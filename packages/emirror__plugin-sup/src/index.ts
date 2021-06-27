import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';

class Sup extends Mark {
  get name() {
    return 'sup' as const;
  }

  get schema(): MarkSpec {
    return {
      parseDOM: [{ tag: 'sup' }],
      toDOM: () => ['sup', { class: 'emirror-sup' }, 0],
    };
  }

  get commands() {
    return {
      toggleSub: toggleMark(this.name),
    };
  }

  keymap = ({ type }) => ({
    'Mod-+': toggleMark(type),
  });
}

export default Sup;
