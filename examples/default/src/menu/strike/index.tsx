import React from 'react';
import Strike from '@emirror/plugin-strike';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Strike;
  view: EditorView;
};

const StrikeBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.toggleStrike}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default StrikeBtn;
