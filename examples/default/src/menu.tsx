import React from 'react';
import BaseMenu from '@emirror/menu';
import { Node, Mark } from '@emirror/core-structure';
import { EditorView } from '@emirror/pm/view';
import { redo, undo } from '@emirror/pm/history';
import { toggleMark } from '@emirror/pm/commands';
import styled from 'styled-components';

type Props = {
  view: EditorView;
  plugins: Record<string, Node | Mark>;
};

const ActiveButton = styled.button`
  &.is-active {
    background-color: rgba(0, 0, 0);
    color: white;
  }
`;

const UndoBtn = ({ view }: { view: EditorView }) => (
  <ActiveButton
    key={'undo'}
    onClick={() => {
      undo(view.state, view.dispatch);
      view.focus();
    }}
  >
    undo
  </ActiveButton>
);

const RedoBtn = ({ view }: { view: EditorView }) => (
  <ActiveButton
    key={'redo'}
    onClick={() => {
      redo(view.state, view.dispatch);
      view.focus();
    }}
  >
    redo
  </ActiveButton>
);

const Menu = (props: Props) => {
  const { view, plugins } = props;

  return (
    <BaseMenu view={view} items={plugins}>
      {Object.entries(plugins).map(([_name, plugin]) => {
        if (plugin.type === 'mark') {
          return (
            <ActiveButton
              data-plugin-name={plugin.name}
              key={plugin.name}
              onClick={() => {
                toggleMark(plugin.name)(view.state, view.dispatch, view);
                view.focus();
              }}
            >
              {plugin.name}
            </ActiveButton>
          );
        }
      })}
      <UndoBtn view={view} />
      <RedoBtn view={view} />
    </BaseMenu>
  );
};

export default Menu;
