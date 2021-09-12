import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import icon from './assets/icon.svg';

const BlockButton = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      onClick={() => {
        emirror.runCommand(emirror.commands.insertBlockNodePlaceholder());
        emirror.view.focus();
      }}
    >
      <img src={icon} />
    </MenuButton>
  );
};

export default BlockButton;
