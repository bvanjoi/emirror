import React from 'react';
import Code from '@emirror/plugin-code';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-basic-react';
import icon from './assets/icon.svg';

type Props = {
  plugin: Code;
  view: EditorView;
};

const CodeBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.toggleCode}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default CodeBtn;
