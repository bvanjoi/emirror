import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { genID } from '@emirror/utils';
import icon from './assets/icon.svg';
import { isNodeActive } from '@emirror/core-helpers';

type Props = {
  addId(id: string, type: 'inline' | 'block'): void;
};

const InlineButton = ({ addId }: Props) => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.nodePlaceholderInline.name,
      )}
      onClick={() => {
        const id = genID();
        addId(id, 'inline');
        emirror.runCommand(
          emirror.commands.insertInlineNodePlaceholder(id),
        );
        emirror.view.focus();
      }}
    >
      <img src={icon} />
    </MenuButton>
  );
};

export default InlineButton;
