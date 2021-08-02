import { Node } from '@emirror/core-structure';

class Doc extends Node {
  get name() {
    return 'doc' as const;
  }

  createNodeSpec() {
    return {
      content: 'block+',
    };
  }
}

export default Doc;
