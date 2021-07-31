import React from 'react';
import BulletList from '@emirror/plugin-bullet-list';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-basic-react';
import icon from './assets/icon.svg';

type Props = {
  plugin: BulletList;
  view: EditorView;
};

const BulletListBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.toggleBulletList}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default BulletListBtn;
