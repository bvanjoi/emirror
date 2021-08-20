import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const BlockquoteBtn = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.blockquote.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleBlockquote());
      }}
    >
      <img src={icon} alt='blockquote-icon' />
    </MenuButton>
  );
};
export default BlockquoteBtn;
