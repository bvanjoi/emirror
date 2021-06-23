import { Node } from '@emirror/core-structure';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { NodeSpec } from '@emirror/pm/model';
import { wrappingInputRule } from '@emirror/pm/inputrules';
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

  get schema(): NodeSpec {
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
            checked: dom.getAttribute('data-checked') == 'true',
          }),
        },
      ],
      toDOM: (node) => [
        'li',
        {
          class: 'emirror-todo-item',
          'data-checked': node.attrs.checked,
        },
        0,
      ],
    };
  }

  keymap = ({ type }) => ({
    Enter: splitListItem(type),
    Tab: sinkListItem(type),
    'Shift-Tab': liftListItem(type),
  });

  get plugins() {
    return [
      new Plugin({
        key: this.todoItemNodeViewKey,
        props: {
          nodeViews: {
            [this.name]: (node, view, getPos) => {
              // dom
              const listItem = document.createElement('li');

              const { checked } = node.attrs;

              listItem.classList.add('emirror-todo-item');
              listItem.setAttribute('data-checked', checked);

              // checkbox item
              const checkbox = document.createElement('span');

              checkbox.classList.add('emirror-todo-item-checkbox');
              checkbox.addEventListener('click', () => {
                if (typeof getPos === 'boolean') {
                  return;
                }
                view.dispatch(
                  view.state.tr.setNodeMarkup(getPos(), undefined, {
                    checked: !checked,
                  }),
                );
              });

              // contentDOM
              const contentDOM = document.createElement('span');
              contentDOM.classList.add('emirror-todo-item-content');

              // append to dom
              listItem.append(checkbox, contentDOM);

              return {
                dom: listItem,
                contentDOM,
                update: (node) => {
                  if (node.type.name === this.name) {
                    return false;
                  }
                  return true;
                },
              };
            },
          },
        },
      }),
    ];
  }

  get pluginsKey() {
    const { todoItemNodeViewKey } = this;
    return {
      todoItemNodeViewKey,
    };
  }

  inputRules = ({ type }) => [
    wrappingInputRule(/(\[([ |x])\]|\[\])\x20$/, type, (match) => ({
      checked: match[match.length - 1] === 'x',
    })),
  ];
}

export default TodoItem;
