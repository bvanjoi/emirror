import React from 'react';
import Strike from '@emirror/plugin-strike';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Strike;
  view: EditorView;
};

const StrikeBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='code-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleStrike}
    >
      <img src={icon} alt='code-icon' />
    </BaseMenuBtn>
  );
};

export default StrikeBtn;
