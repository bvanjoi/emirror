import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import icon from './assets/icon.svg';

const UndoButton = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      onClick={() => {
        emirror.runCommand(emirror.commands.undo());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='undo-icon' />
    </MenuButton>
  );
};

export default UndoButton;
