import React from 'react';
import MenuContainer from '@emirror/menu-basic-react';
import MenuPlugin from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import TodoListBtn from './todo-list';

type Props = {
  view: EditorView;
  plugins: Record<string, any>;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;
  return (
    <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
      <TodoListBtn view={view} plugin={plugins.todoList} />
    </MenuContainer>
  );
};

export default Menu;
