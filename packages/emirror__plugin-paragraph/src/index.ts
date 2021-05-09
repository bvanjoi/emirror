import { Node } from '@emirror/core-structure';
import { DOMOutputSpecArray } from '@emirror/pm/model';
import { baseKeymap } from '@emirror/pm/commands';

class Paragraph extends Node {
  get name() {
    return 'paragraph' as const;
  }

  get schema() {
    return {
      group: 'block',
      content: 'inline*',
      parseDOM: [{ tag: 'p' }],
      toDOM: () =>
        [
          'p',
          { class: 'emirror-paragraph' },
          0,
        ] as DOMOutputSpecArray,
    };
  }

  keymap = () => baseKeymap;
}

export default Paragraph;
