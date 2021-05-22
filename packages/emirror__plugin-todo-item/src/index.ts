import { Node } from '@emirror/core-structure';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { NodeSpec } from '@emirror/pm/model';
import {
  liftListItem,
  sinkListItem,
  splitListItem
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
            checked: dom.getAttribute('data-checked') === 'true',
          }),
        },
      ],
      // toDOM use nodeview in plugin
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
            todoItem: (node, view, getPos) => {
              const listItem = document.createElement('li');
              const checkbox = document.createElement('span');

              const { checked } = node.attrs;

              listItem.classList.add('emirror-todo-item');
              listItem.setAttribute('data-checked', checked);

              checkbox.classList.add('emirror-todo-item-checkbox');
              checkbox.addEventListener('click', () => {
                if (typeof getPos === 'boolean') {
                  return;
                }
                view.dispatch(
                  view.state.tr.setNodeMarkup(getPos(), undefined, {
                    checked: !checked,
                  })
                );
              });

              const content = document.createElement('span');
              content.classList.add('emirror-todo-item-content');
              listItem.append(checkbox, content);

              return {
                dom: listItem,
                contentDOM: content,
                update: node => {
                  if (node.type.name === 'todoItem') {
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
}

export default TodoItem;
