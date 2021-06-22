import React from 'react';
import styled from 'styled-components';
import githubIcon from '@/assets/github.png';
import Link from '../../basic-components/link';

const NavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;
  width: 100%;
  height: 72px;
`;

const IconStyled = styled.img`
  width: 28px;
`;

const Navigation = () => {
  return (
    <NavStyled>
      <span>Emirror</span>
      <Link href='https://github.com/bvanjoi/emirror' target='__blank'>
        <IconStyled src={githubIcon} alt='repo' />
      </Link>
    </NavStyled>
  );
};

export default Navigation;
