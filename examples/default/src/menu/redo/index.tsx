import React from 'react';
import Histroy from '@emirror/plugin-history';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Histroy;
  view: EditorView;
};

const RedoButton = ({ view, plugin }: Props) => (
  <BasicMenuBtn view={view} onClick={plugin.commands.redo}>
    <img src={icon} />
  </BasicMenuBtn>
);

export default RedoButton;
