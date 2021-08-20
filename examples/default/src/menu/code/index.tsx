import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isMarkActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const CodeBtn = () => {
  const emirror = useEMirrorContext();
  return (
    <MenuButton
      activated={isMarkActive(
        emirror.view.state,
        emirror.emPlugins.code.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleCode());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='code-icon' />
    </MenuButton>
  );
};

export default CodeBtn;
