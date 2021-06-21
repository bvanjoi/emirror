import React from 'react';
import Bold from '@emirror/plugin-bold';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Bold;
  view: EditorView;
};

const BoldBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='bold-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleBold}
    >
      <img src={icon} alt='bold-icon' />
    </BaseMenuBtn>
  );
};

export default BoldBtn;
