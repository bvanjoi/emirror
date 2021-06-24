import React from 'react';
import TodoList from '@emirror/plugin-todo-list';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: TodoList;
  view: EditorView;
};

const TodoListBtn = ({ plugin, view }: Props) => {
  return (
    <BasicMenuBtn
      view={view}
      plugin={plugin}
      onClick={plugin.commands.toggleTodoList}
    >
      <img src={icon} />
    </BasicMenuBtn>
  );
};

export default TodoListBtn;
