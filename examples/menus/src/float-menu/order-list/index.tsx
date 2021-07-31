import React from 'react';
import OrderList from '@emirror/plugin-order-list';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-basic-react';
import icon from './assets/icon.svg';

type Props = {
  plugin: OrderList;
  view: EditorView;
};

const OrderListBtn = ({ plugin, view }: Props) => (
  <BasicMenuBtn
    view={view}
    plugin={plugin}
    onClick={plugin.commands.toggleOrderList}
  >
    <img src={icon} />
  </BasicMenuBtn>
);

export default OrderListBtn;
