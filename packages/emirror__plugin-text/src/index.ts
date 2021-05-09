import { Node } from '@emirror/core-structure';

class Text extends Node {
  get name() {
    return 'text' as const;
  }

  get schema() {
    return {
      group: 'inline',
      inline: true,
    };
  }
}

export default Text;
