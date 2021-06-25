import React from 'react';
import MenuContainer from '@emirror/menu-react-basic';
import MenuPlugin from '@emirror/menu-float';
import { EditorView } from '@emirror/pm/view';
import HeadingBtn from './heading';
import OrderListBtn from './order-list';
import BulletListBtn from './bullet-list';
import './style.css';

type Props = {
  view: EditorView;
  plugins: Record<string, any>;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;
  return (
    <MenuContainer
      view={view}
      items={plugins}
      menuPlugin={MenuPlugin}
      className='float-menu-container hidden'
    >
      <HeadingBtn view={view} plugin={plugins.heading} />
      <BulletListBtn view={view} plugin={plugins.bulletList} />
      <OrderListBtn view={view} plugin={plugins.orderList} />
    </MenuContainer>
  );
};

export default Menu;
