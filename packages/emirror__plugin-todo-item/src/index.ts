import { Node } from '@emirror/core-structure';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { NodeSpec } from '@emirror/pm/model';
import { wrappingInputRule } from '@emirror/pm/inputrules';
import TodoItemView from './nodeview';
import {
  liftListItem,
  sinkListItem,
  splitListItem,
} from '@emirror/pm/schema-list';
import './style.css';

class TodoItem extends Node {
  todoItemNodeViewKey = new PluginKey('todoItemNodeViewKey');

  get name() {
    return 'todoItem' as const;
  }

  createNodeSpec(): NodeSpec {
    return {
      attrs: {
        checked: {
          default: false,
        },
      },
      content: 'paragraph{1}',
      defining: true,
      draggable: false,
      parseDOM: [
        {
          priority: 51,
          tag: 'li.emirror-todo-item',
          getAttrs: (dom: HTMLElement) => ({
            checked: dom.getAttribute('data-checked') === 'true',
          }),
        },
      ],
      toDOM: node => [
        'li',
        {
          class: 'emirror-todo-item',
          'data-checked': node.attrs.checked,
        },
        0,
      ],
    };
  }

  get keymap() {
    return {
      Enter: splitListItem(this.name),
      Tab: sinkListItem(this.name),
      'Shift-Tab': liftListItem(this.name),
    };
  }

  get plugin() {
    return new Plugin({
      key: this.todoItemNodeViewKey,
      props: {
        nodeViews: {
          [this.name]: (node, view, getPos) =>
            new TodoItemView(node, view, getPos),
        },
      },
    });
  }

  inputRules = ({ type }) => [
    wrappingInputRule(/(\[([ |x])\]|\[\])\x20$/, type, match => ({
      checked: match[match.length - 1] === 'x',
    })),
  ];
}

export default TodoItem;
