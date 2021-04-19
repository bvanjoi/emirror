import { Node } from '@emirror/core-structure';
import { DOMOutputSpecArray } from '@emirror/pm/model';

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

  constructor() {
    super();
    return this;
  }
}
