import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const BulletListBtn = () => {
  const emirror = useEMirrorContext();
  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.bulletList.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleBulletList());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='bulletList-icon' />
    </MenuButton>
  );
};

export default BulletListBtn;
