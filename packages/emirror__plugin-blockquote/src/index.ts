import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { wrapIn } from '@emirror/pm/commands';
import { toggleWrap } from '@emirror/utils';
import { wrappingInputRule } from '@emirror/pm/inputrules';
import './style.css';

class Blockquote extends Node {
  get name() {
    return 'blockquote' as const;
  }

  get schema(): NodeSpec {
    return {
      content: 'block+',
      group: 'block',
      defining: true,
      parseDOM: [{ tag: 'blockquote' }],
      toDOM: () => ['blockquote', { class: 'emirror-blockquote' }, 0],
    };
  }

  get commands() {
    return {
      toggleBlockquote: toggleWrap(this.name),
    };
  }

  keymap = ({ type }) => ({
    'Mod->': wrapIn(type),
    'Mod-》': wrapIn(type),
  });

  inputRules = ({ type }) => [
    wrappingInputRule(/^\s*(>|》)\x20$/, type),
  ];
}

export default Blockquote;
