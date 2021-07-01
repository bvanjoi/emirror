import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { insertHardBreak } from './command';

class HardBreak extends Node {
  get name() {
    return 'hardBreak';
  }

  createNodeSpec(): NodeSpec {
    return {
      group: 'inline',
      inline: true,
      parseDOM: [{ tag: 'br' }],
      toDOM: () => ['br', { class: 'emirror-br' }],
    };
  }

  get commands() {
    return {
      insertHardBreak: insertHardBreak(this.name),
    };
  }

  get keymap() {
    return {
      'Mod-Enter': insertHardBreak(this.name),
      'Shift-Enter': insertHardBreak(this.name),
    };
  }
}

export default HardBreak;
