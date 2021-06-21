import React from 'react';
import BulletList from '@emirror/plugin-bullet-list';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: BulletList;
  view: EditorView;
};

const OrderListBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='bullet-list-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleBulletList}
    >
      <img src={icon} alt='bullet-list-icon' />
    </BaseMenuBtn>
  );
};

export default OrderListBtn;
