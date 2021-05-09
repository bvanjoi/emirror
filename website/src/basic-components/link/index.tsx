import React from 'react';
import styled from 'styled-components';
import cls from 'classnames';

type Props = {} & React.AnchorHTMLAttributes<Element>;

const LinkStyled = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;

  :active {
    color: black;
  }

  :visited {
    color: black;
  }

  :focus-visible {
    outline: none;
  }
`;

const Link = (props: Props) => {
  const { children, className } = props;

  return (
    <LinkStyled {...props} className={cls('brc-link', className)}>
      {children}
    </LinkStyled>
  );
};

export default Link;
