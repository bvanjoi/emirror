import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import icon from './assets/icon.svg';

const InlineButton = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      onClick={() => {
        emirror.runCommand(emirror.commands.insertInlineNodePlaceholder());
        emirror.view.focus();
      }}
    >
      <img src={icon} />
    </MenuButton>
  );
};

export default InlineButton;
