import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { wrappingInputRule } from '@emirror/pm/inputrules';
import { toggleList } from '@emirror/plugin-list-item';

class BulletList extends Node {
  get name() {
    return 'bulletList' as const;
  }

  createNodeSpec(): NodeSpec {
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

  get keymap() {
    return {
      'Shift-Ctrl-7': toggleList(this.name, 'listItem'),
    };
  }

  inputRules = ({ type }) => [wrappingInputRule(/^\s*[-+*]\s$/, type)];
}

export default BulletList;
