import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';

class Sub extends Mark {
  get name() {
    return 'sub' as const;
  }

  createMarkSpec(): MarkSpec {
    return {
      parseDOM: [{ tag: 'sub' }],
      toDOM: () => ['sub', { class: 'emirror-sub' }, 0],
    };
  }

  get commands() {
    return {
      toggleSub: toggleMark(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-=': toggleMark(this.name),
    };
  }
}

export default Sub;
