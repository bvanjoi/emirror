import React from 'react';
import Histroy from '@emirror/plugin-history';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Histroy;
  view: EditorView;
};

const UndoButton = ({ view, plugin }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='undo-menu'
      handleClick={plugin.commands.undo}
    >
      <img src={icon} alt='undo-icon' />
    </BaseMenuBtn>
  );
};

export default UndoButton;
