import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';

class Sup extends Mark {
  get name() {
    return 'sup' as const;
  }

  createMarkSpec(): MarkSpec {
    return {
      parseDOM: [{ tag: 'sup' }],
      toDOM: () => ['sup', { class: 'emirror-sup' }, 0],
    };
  }

  get commands() {
    return {
      toggleSup: () => toggleMark(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-+': toggleMark(this.name),
    };
  }
}

export default Sup;
