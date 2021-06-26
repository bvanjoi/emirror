import React from 'react';
import MenuContainer from '@emirror/menu-react-basic';
import MenuPlugin from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import WebsiteCardBtn from './website-card';

type Props = {
  view: EditorView;
  plugins: Record<string, any>;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;
  return (
    <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
      <WebsiteCardBtn view={view} plugin={plugins.websiteCard} />
    </MenuContainer>
  );
};

export default Menu;
