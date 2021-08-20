import React from 'react';
import BoldBtn from './bold';
import ItalicBtn from './italic';
import CodeBtn from './code';
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
import HardBreakBtn from './hard-break';

const Menu = () => (
  <div>
    <BoldBtn />
    <ItalicBtn />
    <StrikeBtn />
    <UnderlineBtn />
    <CodeBtn />
    <ParagraphBtn />
    <HeadingBtn />
    <BlockquoteBtn />
    <OrderListBtn />
    <BulletListBtn />
    <HardBreakBtn />
    <HRBtn />
    <UndoBtn />
    <RedoBtn />
  </div>
);

export default Menu;
