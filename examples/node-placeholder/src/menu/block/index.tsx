import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { genID } from '@emirror/utils';
import icon from './assets/icon.svg';
import { isNodeActive } from '@emirror/core-helpers';

type Props = {
  addId(id: string, type: 'inline' | 'block'): void;
};

const BlockButton = ({ addId }: Props) => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.nodePlaceholderBlock.name,
      )}
      onClick={() => {
        const id = genID();
        addId(id, 'block');
        emirror.runCommand(
          emirror.commands.insertBlockNodePlaceholder(id),
        );
        emirror.view.focus();
      }}
    >
      <img src={icon} />
    </MenuButton>
  );
};

export default BlockButton;
