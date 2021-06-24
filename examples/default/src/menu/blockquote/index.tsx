import React from 'react';
import Blockquote from '@emirror/plugin-blockquote';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Blockquote;
  view: EditorView;
};

const BlockquoteBtn = ({ plugin, view }: Props) => {
  return (
    <BasicMenuBtn
      view={view}
      plugin={plugin}
      onClick={plugin.commands.toggleBlockquote}
    >
      <img src={icon} />
    </BasicMenuBtn>
  );
};

export default BlockquoteBtn;
