import React from 'react';
import styled from 'styled-components';
import Link from '../../basic-components/link';

const NavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;
  width: 100%;
  height: 72px;
`;

const Navigation = () => {
  /**
   * The reaction of click EMirror logo.
   */
  const handleClickLogo = (event: React.MouseEvent) => {
    if (location.pathname === '/') {
      event.preventDefault();
    }
  };

  return (
    <NavStyled>
      <Link href="/" onClick={handleClickLogo}>
        Emirror
      </Link>
      <Link href="https://github.com/bvanjoi/emirror" target="__blank">
        Github Repo
      </Link>
    </NavStyled>
  );
};

export default Navigation;
