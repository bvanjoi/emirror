import React from 'react';
import Paragraph from '@emirror/plugin-paragraph';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: Paragraph;
  view: EditorView;
};

const ParagraphBtn = ({ view, plugin }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.setParagraph}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default ParagraphBtn;
