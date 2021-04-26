import { Node } from '@emirror/core-structure';

export class Doc extends Node {
  get name() {
    return 'doc' as const;
  }

  get schema() {
    return {
      content: 'block+',
    };
  }
}
