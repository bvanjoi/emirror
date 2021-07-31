import React from 'react';
import MenuContainer from '@emirror/menu-basic-react';
import MenuPlugin from '@emirror/menu-float';
import { EditorView } from '@emirror/pm/view';
import HeadingBtn from './heading';
import OrderListBtn from './order-list';
import BulletListBtn from './bullet-list';
import ParagraphBtn from './paragraph';
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
      <ParagraphBtn view={view} plugin={plugins.paragraph} />
      <HeadingBtn view={view} plugin={plugins.heading} />
      <BulletListBtn view={view} plugin={plugins.bulletList} />
      <OrderListBtn view={view} plugin={plugins.orderList} />
    </MenuContainer>
  );
};

export default Menu;
