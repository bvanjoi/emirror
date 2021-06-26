import React from 'react';
import styled from 'styled-components';
import { Command } from '@emirror/pm/commands';
import { EditorView } from '@emirror/pm/view';
import { Mark, Node } from '@emirror/core-structure';

type Props = {
  /**
   * className for this menu button
   */
  className?: string;
  /**
   * The Command when you click this menu button
   */
  onClick: Command;
  /**
   * The instance ProseMirror view
   */
  view: EditorView;
  /**
   * The instance plugin of EMirror
   */
  plugin?: Node | Mark;
  /**
   * The chidren inner Menu Button
   */
  children?: React.ReactChild;
  /**
   * The attrs of plugin, it determined weather show actived.
   */
  attrs?: { [key: string]: any };
};

const StyledMenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;

  padding: 2px 4px;
  margin: 0 2px;

  width: 24px;
  height: 22px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.activated {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const BasicMenuBtn = ({
  view,
  attrs,
  plugin,
  children,
  className = '',
  onClick,
}: Props) => (
  <StyledMenuButton
    className={className}
    data-plugin-name={plugin?.name}
    data-plugin-attrs={JSON.stringify(attrs)}
    onClick={() => {
      onClick(view.state, view.dispatch, view);
      view.focus();
    }}
  >
    {children}
  </StyledMenuButton>
);

export default BasicMenuBtn;