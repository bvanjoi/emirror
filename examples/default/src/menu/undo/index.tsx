import React from 'react';
import Histroy from '@emirror/plugin-history';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Histroy;
  view: EditorView;
};

const UndoButton = ({ view, plugin }: Props) => {
  return (
    <BasicMenuBtn view={view} onClick={plugin.commands.undo}>
      <img src={icon} />
    </BasicMenuBtn>
  );
};

export default UndoButton;
