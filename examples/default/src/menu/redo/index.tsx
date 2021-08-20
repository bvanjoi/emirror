import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import icon from './assets/icon.svg';

const RedoButton = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      onClick={() => {
        emirror.runCommand(emirror.commands.redo());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='redo-icon' />
    </MenuButton>
  );
};

export default RedoButton;
