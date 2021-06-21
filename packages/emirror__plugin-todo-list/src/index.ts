import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
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

  get commands() {
    return {
      toggleTodoList: toggleList(this.name, 'todoItem'),
    };
  }

  keymap = ({ type }) => ({
    'Shift-Ctrl-9': toggleList(type, 'todoItem'),
  });
}

export default TodoList;
