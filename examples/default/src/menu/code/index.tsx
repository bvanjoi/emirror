import React from 'react';
import Code from '@emirror/plugin-code';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Code;
  view: EditorView;
};

const CodeBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='code-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleCode}
    >
      <img src={icon} alt='code-icon' />
    </BaseMenuBtn>
  );
};

export default CodeBtn;
