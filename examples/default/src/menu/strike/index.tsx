import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isMarkActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const StrikeBtn = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isMarkActive(
        emirror.view.state,
        emirror.emPlugins.strike.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleStrike());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='strike-icon' />
    </MenuButton>
  );
};

export default StrikeBtn;
