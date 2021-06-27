import React from 'react';
import MenuContainer from '@emirror/menu-react-basic';
import MenuPlugin from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import BoldBtn from './bold';
import CodeBtn from './code';
import ItalicBtn from './italic';
import StrikeBtn from './strike';
import UndoBtn from './undo';
import RedoBtn from './redo';
import UnderlineBtn from './underline';
import HeadingBtn from './heading';
import BlockquoteBtn from './blockquote';
import OrderListBtn from './order-list';
import BulletListBtn from './bullet-list';
import HRBtn from './hr';
import ParagraphBtn from './paragraph';
type Props = {
  view: EditorView;
  plugins: Record<string, any>;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;
  return (
    <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
      <BoldBtn view={view} plugin={plugins.bold} />
      <ItalicBtn view={view} plugin={plugins.italic} />
      <StrikeBtn view={view} plugin={plugins.strike} />
      <UnderlineBtn view={view} plugin={plugins.underline} />
      <CodeBtn view={view} plugin={plugins.code} />
      <ParagraphBtn view={view} plugin={plugins.paragraph} />
      <HeadingBtn view={view} plugin={plugins.heading} />
      <BlockquoteBtn view={view} plugin={plugins.blockquote} />
      <OrderListBtn view={view} plugin={plugins.orderList} />
      <BulletListBtn view={view} plugin={plugins.bulletList} />
      <HRBtn view={view} plugin={plugins.hr} />
      <UndoBtn view={view} plugin={plugins.history} />
      <RedoBtn view={view} plugin={plugins.history} />
    </MenuContainer>
  );
};

export default Menu;
