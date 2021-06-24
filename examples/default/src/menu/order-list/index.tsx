import React from 'react';
import OrderList from '@emirror/plugin-order-list';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import icon from './assets/icon.svg';

type Props = {
  plugin: OrderList;
  view: EditorView;
};

const OrderListBtn = ({ plugin, view }: Props) => {
  return (
    <BasicMenuBtn
      view={view}
      plugin={plugin}
      onClick={plugin.commands.toggleOrderList}
    >
      <img src={icon} />
    </BasicMenuBtn>
  );
};

export default OrderListBtn;
