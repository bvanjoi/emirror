import { Mark } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';

class Sub extends Mark {
  get name() {
    return 'sub' as const;
  }

  get schema(): MarkSpec {
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

  keymap = ({ type }) => ({
    'Mod-=': toggleMark(type),
  });
}

export default Sub;
