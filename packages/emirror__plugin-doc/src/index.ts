import { Node } from '@emirror/core-structure';
import { dropCursor } from '@emirror/pm/dropCursor';

class Doc extends Node {
  get name() {
    return 'doc' as const;
  }

  createNodeSpec() {
    return {
      content: 'block+',
    };
  }

  get plugins() {
    return [dropCursor()];
  }
}

export default Doc;
