import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isMarkActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const ItalicBtn = () => {
  const emirror = useEMirrorContext();
  return (
    <MenuButton
      activated={isMarkActive(
        emirror.view.state,
        emirror.emPlugins.italic.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleItalic());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='italic-icon' />
    </MenuButton>
  );
};
export default ItalicBtn;
