import React from 'react';
import Italic from '@emirror/plugin-italic';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Italic;
  view: EditorView;
};

const ItalicBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='code-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleItalic}
    >
      <img src={icon} alt='code-icon' />
    </BaseMenuBtn>
  );
};

export default ItalicBtn;
