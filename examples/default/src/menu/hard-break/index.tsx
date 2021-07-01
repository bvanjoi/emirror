import React from 'react';
import HardBreak from '@emirror/plugin-hard-break';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: HardBreak;
  view: EditorView;
};

const CodeBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.insertHardBreak}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default CodeBtn;
