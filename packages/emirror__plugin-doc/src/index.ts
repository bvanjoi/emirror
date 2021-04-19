import { Node } from '@emirror/core-structure';

export class Doc extends Node {
  get name() {
    return 'doc';
  }

  get schema() {
    return {
      content: 'block+',
    };
  }

  constructor() {
    super();
    return this;
  }
}
