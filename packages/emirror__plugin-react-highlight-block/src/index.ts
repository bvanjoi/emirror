import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import HighlightView from './HighlightView';

class HighlightBlock extends Node {
  get name() {
    return 'highlightBlock' as const;
  }

  get schema(): NodeSpec {
    return {
      group: 'block',
      content: '(paragraph|bulletList|orderList)+',
      defining: true,
      parseDOM: [{ tag: 'div.emirror-highlight-block' }],
      toDOM: () => ['div', { class: 'emirror-highlight-block' }, 0],
    };
  }

  reactComponent = HighlightView;
}

export default HighlightBlock;
