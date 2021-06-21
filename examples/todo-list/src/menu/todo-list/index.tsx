import React from 'react';
import TodoList from '@emirror/plugin-todo-list';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: TodoList;
  view: EditorView;
};

const TodoListBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='todo-list-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleTodoList}
    >
      <img src={icon} alt='todo-list-icon' />
    </BaseMenuBtn>
  );
};

export default TodoListBtn;
