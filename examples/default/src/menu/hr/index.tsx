import React from 'react';
import HR from '@emirror/plugin-hr';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: HR;
  view: EditorView;
};

const HRBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.insertHR}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default HRBtn;
