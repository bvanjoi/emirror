import React from 'react';
import Underline from '@emirror/plugin-underline';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-basic-react';
import icon from './assets/icon.svg';

type Props = {
  plugin: Underline;
  view: EditorView;
};

const UnderlineBtn = ({ view, plugin }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.toggleUnderline}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default UnderlineBtn;
