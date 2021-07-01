import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';

class Title extends Node {
  get name() {
    return 'title' as const;
  }

  createNodeSpec(): NodeSpec {
    return {
      content: 'inline*',
      parseDOM: [
        {
          tag: 'h1',
        },
      ],
      toDOM: () => ['h1', { class: 'emirror-title' }, 0],
    };
  }
}

export default Title;
