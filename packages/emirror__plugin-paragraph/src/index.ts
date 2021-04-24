import { Node } from '@emirror/core-structure';
import { DOMOutputSpecArray } from '@emirror/pm/model';
import { baseKeymap } from '@emirror/pm/commands';

export class Paragraph extends Node {
  get name() {
    return 'paragraph';
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