import MenuContainer from '@emirror/menu-basic-react';
import { EditorView } from '@emirror/pm/view';
import MenuPlugin from '@emirror/menu';
import React from 'react';
import TextAlignBtns from './text-align';

type Props = {
  view: EditorView;
  plugins: Record<string, any>;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;
  return (
    <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
      <TextAlignBtns view={view} plugin={plugins.textAlign} />
    </MenuContainer>
  );
};

export default Menu;
