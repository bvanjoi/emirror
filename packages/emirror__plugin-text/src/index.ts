import { Node } from '@emirror/core-structure';

class Text extends Node {
  get name() {
    return 'text' as const;
  }

  createNodeSpec() {
    return {
      group: 'inline',
      inline: true,
    };
  }
}

export default Text;
