import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isMarkActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const UnderlineBtn = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isMarkActive(
        emirror.view.state,
        emirror.emPlugins.underline.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleUnderline());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='underline-icon' />
    </MenuButton>
  );
};

export default UnderlineBtn;
