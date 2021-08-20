import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const TodoListBtn = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.todoList.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleTodoList());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='todoList-icon' />
    </MenuButton>
  );
};

export default TodoListBtn;
