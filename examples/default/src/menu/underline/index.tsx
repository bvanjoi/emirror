import React from 'react';
import Underline from '@emirror/plugin-underline';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Underline;
  view: EditorView;
};

const UnderlineBtn = ({ view, plugin }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      plugin={plugin}
      className='underline-menu'
      handleClick={plugin.commands.toggleUnderline}
    >
      <img src={icon} alt='underline-icon' />
    </BaseMenuBtn>
  );
};

export default UnderlineBtn;
