import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import {
  liftListItem,
  sinkListItem,
  splitListItem
} from '@emirror/pm/schema-list';

class ListItem extends Node {
  get name() {
    return 'listItem' as const;
  }

  get schema(): NodeSpec {
    return {
      content: 'block*',
      defining: true,
      draggable: false,
      parseDOM: [{ tag: 'li' }],
      toDOM: () => ['li', { class: 'emirror-li' }, 0],
    };
  }

  keymap = ({ type }) => ({
    Enter: splitListItem(type),
    Tab: sinkListItem(type),
    'Shift-Tab': liftListItem(type),
  });
}

export default ListItem;
export * from './command';
