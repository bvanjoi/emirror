import { Node } from '@emirror/core-structure';

export class Text extends Node {
  get name() {
    return 'text';
  }

  get schema() {
    return {
      group: 'inline',
      inline: true,
    };
  }
}
