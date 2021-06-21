import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { wrappingInputRule } from '@emirror/pm/inputrules';
import { toggleList } from '@emirror/plugin-list-item';

class BulletList extends Node {
  get name() {
    return 'bulletList' as const;
  }

  get schema(): NodeSpec {
    return {
      content: 'listItem+',
      group: 'block',
      parseDOM: [{ tag: 'ul' }],
      toDOM: () => ['ul', { class: 'emirror-bullet-list' }, 0],
    };
  }

  get commands() {
    return {
      toggleBulletList: toggleList(this.name, 'listItem'),
    };
  }

  keymap = ({ type }) => ({
    'Shift-Ctrl-7': toggleList(type, 'listItem'),
  });

  inputRules = ({ type }) => [
    wrappingInputRule(/^\s*[-+*]\s$/, type),
  ];
}

export default BulletList;
