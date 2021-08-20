import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const HardBreakBtn = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.hr.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.insertHardBreak());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='hr-icon' />
    </MenuButton>
  );
};

export default HardBreakBtn;
