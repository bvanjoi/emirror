import React from 'react';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import WebsiteCard from '@emirror/plugin-website-card';
import icon from './assets/icon.svg';

type Props = {
  plugin: WebsiteCard;
  view: EditorView;
};

const WebsiteCardBtn = ({ plugin, view }: Props) => {
  return (
    <BasicMenuBtn
      view={view}
      plugin={plugin}
      onClick={plugin.commands.toggleTodoList}
    >
      <img src={icon} />
    </BasicMenuBtn>
  );
};

export default WebsiteCardBtn;
