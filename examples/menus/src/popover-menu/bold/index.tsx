import React from 'react';
import Bold from '@emirror/plugin-bold';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Bold;
  view: EditorView;
};

const BoldBtn = ({ plugin, view }: Props) => {
  return (
    <BasicMenuBtn
      view={view}
      plugin={plugin}
      onClick={plugin.commands.toggleBold}
    >
      <img src={icon} />
    </BasicMenuBtn>
  );
};

export default BoldBtn;
