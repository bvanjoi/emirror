import { Node } from '@emirror/core-structure';
import { gapCursor } from '@emirror/pm/gapCursor';
import { dropCursor } from '@emirror/pm/dropCursor';

class Doc extends Node {
  get name() {
    return 'doc' as const;
  }

  get schema() {
    return {
      content: 'block+',
    };
  }

  get plugins() {
    return [gapCursor(), dropCursor()];
  }
}

export default Doc;
