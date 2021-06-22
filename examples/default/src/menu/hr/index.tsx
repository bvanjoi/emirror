import React from 'react';
import HR from '@emirror/plugin-hr';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: HR;
  view: EditorView;
};

const HRBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='code-menu'
      plugin={plugin}
      handleClick={plugin.commands.insertHR}
    >
      <img src={icon} alt='code-icon' />
    </BaseMenuBtn>
  );
};

export default HRBtn;
