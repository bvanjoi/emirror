import React from 'react';
import MenuContainer from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import TodoListBtn from './todo-list';

type Props = {
  view: EditorView;
  plugins: Record<string, any>;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;
  return (
    <MenuContainer view={view} items={plugins}>
      <TodoListBtn view={view} plugin={plugins.todoList} />
    </MenuContainer>
  );
};

export default Menu;
