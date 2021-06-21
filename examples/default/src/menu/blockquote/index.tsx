import React from 'react';
import Blockquote from '@emirror/plugin-blockquote';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: Blockquote;
  view: EditorView;
};

const BlockquoteBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='blockquote-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleBlockquote}
    >
      <img src={icon} alt='blockquote-icon' />
    </BaseMenuBtn>
  );
};

export default BlockquoteBtn;
