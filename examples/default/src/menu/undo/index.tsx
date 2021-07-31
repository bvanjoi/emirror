import React from 'react';
import Histroy from '@emirror/plugin-history';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-basic-react';
import icon from './assets/icon.svg';

type Props = {
  plugin: Histroy;
  view: EditorView;
};

const UndoButton = ({ view, plugin }: Props) => (
  <BasicMenuBtn view={view} onClick={plugin.commands.undo}>
    <img src={icon} />
  </BasicMenuBtn>
);

export default UndoButton;
