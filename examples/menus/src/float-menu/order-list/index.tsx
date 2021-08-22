import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import icon from './assets/icon.svg';

const OrderListBtn = () => {
  const emirror = useEMirrorContext();
  return (
    <MenuButton
      activated={isNodeActive(
        emirror.view.state,
        emirror.emPlugins.orderList.name,
      )}
      onClick={() => {
        emirror.runCommand(emirror.commands.toggleOrderList());
        emirror.view.focus();
      }}
    >
      <img src={icon} />
    </MenuButton>
  );
};

export default OrderListBtn;
