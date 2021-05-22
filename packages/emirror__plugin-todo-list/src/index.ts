import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { wrappingInputRule } from '@emirror/pm/inputrules';
import { toggleList } from '@emirror/plugin-list-item';
import './style.css';

class TodoList extends Node {
  get name() {
    return 'todoList' as const;
  }

  get schema(): NodeSpec {
    return {
      content: 'todoItem+',
      group: 'block',
      parseDOM: [
        {
          priority: 51,
          tag: 'ul',
        },
      ],
      toDOM: () => ['ul', { class: 'emirror-todo-list' }, 0],
    };
  }

  keymap = ({ type }) => ({
    'Shift-Ctrl-9': toggleList(type, 'todoItem'),
  });

  inputRules = ({ type }) => [
    wrappingInputRule(/\s*(\[([ |x])\])\x20$/, type, match => ({
      checked: match[match.length - 1] === 'x',
    })),
  ];
}

export default TodoList;
