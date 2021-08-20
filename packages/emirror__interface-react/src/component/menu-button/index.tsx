import React from 'react';
import styled from 'styled-components';
import cls from 'classnames';

type Props = {
  /**
   * Is this button activated? Default is false.
   */
  activated?: boolean;
  /**
   * Is this button disabled? Default is false.
   */
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledMenuButton = styled.button`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;

  padding: 2px 4px;
  margin: 0 2px;

  width: 24px;
  height: 22px;
  background-color: transparent;

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

const MenuButton = (props: Props) => {
  const { onClick, children, activated, disabled, className = '' } = props;
  return (
    <StyledMenuButton
      className={cls(className, { activated, disabled })}
      onClick={onClick}
    >
      {children}
    </StyledMenuButton>
  );
};

export default MenuButton;
