import React, { useState } from 'react';
import EMirror from '@emirror/core';
import { EditorView } from '@emirror/pm/view';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import TodoItem from '@emirror/plugin-todo-item';
import TodoList from '@emirror/plugin-todo-list';
import Menu from './menu';

const TitleDocEMirror = () => {
  const [view, setView] = useState<EditorView>(null);

  const todoList = new TodoList();

  return (
    <div>
      {view && <Menu view={view} plugins={{ todoList }} />}
      <EMirror
        afterInit={_view => {
          setView(view);
        }}
        topNode={new Doc()}
        plugins={[
          new Paragraph(),
          new Text(),
          new History(),
          new TodoItem(),
          todoList,
        ]}
      >
        <p>
          May be you had somethings todo, then you can use todo plugin.
        </p>
        <p>
          For example, there are something that need to be done, and
          something that have already been done:
        </p>
        <ul className='emirror-todo-list'>
          <li className='emirror-todo-item' data-checked='true'>
            Send report to Jack
          </li>
          <li className='emirror-todo-item' data-checked='true'>
            Book table at restaurant
          </li>
          <li className='emirror-todo-item'>Review subscriptions</li>
          <li className='emirror-todo-item'>Pacage delivery</li>
        </ul>
        <p>Also, it support markdown shortcut.</p>
      </EMirror>
    </div>
  );
};

export default TitleDocEMirror;
