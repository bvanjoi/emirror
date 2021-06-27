import React from 'react';
import Italic from '@emirror/plugin-italic';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Italic;
  view: EditorView;
};

const ItalicBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.toggleItalic}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default ItalicBtn;
