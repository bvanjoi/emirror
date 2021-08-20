import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const ParagraphBtn = () => {
  const emirror = useEMirrorContext();
  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.paragraph.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.setParagraph());
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='paragraph-icon' />
    </MenuButton>
  );
};

export default ParagraphBtn;
