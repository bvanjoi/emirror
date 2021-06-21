import React from 'react';
import OrderList from '@emirror/plugin-order-list';
import { EditorView } from '@emirror/pm/view';
import { BaseMenuBtn } from '@emirror/menu';
import icon from './assets/icon.svg';

type Props = {
  plugin: OrderList;
  view: EditorView;
};

const OrderListBtn = ({ plugin, view }: Props) => {
  return (
    <BaseMenuBtn
      view={view}
      className='order-list-menu'
      plugin={plugin}
      handleClick={plugin.commands.toggleOrderList}
    >
      <img src={icon} alt='order-list-icon' />
    </BaseMenuBtn>
  );
};

export default OrderListBtn;
