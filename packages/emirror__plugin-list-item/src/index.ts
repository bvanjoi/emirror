import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import {
  liftListItem,
  sinkListItem,
  splitListItem,
} from '@emirror/pm/schema-list';

class ListItem extends Node {
  get name() {
    return 'listItem' as const;
  }

  createNodeSpec(): NodeSpec {
    return {
      content: 'block*',
      defining: true,
      draggable: false,
      parseDOM: [{ tag: 'li' }],
      toDOM: () => ['li', { class: 'emirror-li' }, 0],
    };
  }

  get keymap() {
    return {
      Enter: splitListItem(this.name),
      Tab: sinkListItem(this.name),
      'Shift-Tab': liftListItem(this.name),
    };
  }
}

export default ListItem;
export * from './command';
