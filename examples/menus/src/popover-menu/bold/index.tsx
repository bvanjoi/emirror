import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isMarkActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const BoldBtn = () => {
  const emirror = useEMirrorContext();
  return (
    <MenuButton
      activated={isMarkActive(
        emirror.view.state,
        emirror.emPlugins.bold.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleBold());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='bold-icon' />
    </MenuButton>
  );
};

export default BoldBtn;
