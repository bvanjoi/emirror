import React from 'react';
import Histroy from '@emirror/plugin-history';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';

import icon from './assets/icon.svg';

type Props = {
  plugin: Histroy;
  view: EditorView;
};

const RedoButton = ({ view, plugin }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='redo-menu'
      handleClick={plugin.commands.redo}
    >
      <img src={icon} alt='redo-icon' />
    </BaseMenuBtn>
  );
};

export default RedoButton;
