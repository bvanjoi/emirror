import React from 'react';
import MenuContainer from '@emirror/menu-react-basic';
import MenuPlugin from '@emirror/menu-popover';
import { EditorView } from '@emirror/pm/view';
import BoldBtn from './bold';
import ItalicBtn from './italic';
import StrikeBtn from './strike';
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
      className='popover-menu-container hidden'
    >
      <BoldBtn view={view} plugin={plugins.bold} />
      <ItalicBtn view={view} plugin={plugins.italic} />
      <StrikeBtn view={view} plugin={plugins.strike} />
    </MenuContainer>
  );
};

export default Menu;
