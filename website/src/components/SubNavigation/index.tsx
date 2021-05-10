import React from 'react';
import cls from 'classnames';
import Link from '../../basic-components/link';
import styled from 'styled-components';

const WrappedLink = styled(Link)`
  &.selected {
    border-bottom: 1px solid black;
  }
`;

type Props = {
  /**
   * all pages EMirror editor.
   */
  menus: string[];
  /**
   * now pathname of url.
   * It can use to selecte menu.
   */
  pathname: string;
};

const SubNavWrapper = styled.div`
  * {
    margin: 0 8px;
  }

  margin-bottom: 10px;

  display: flex;
  justify-content: flex-start;
`;

const SubNavigation = (props: Props) => {
  const { menus, pathname } = props;
  return (
    <SubNavWrapper>
      {menus.map((menu) => (
        <WrappedLink
          key={menu}
          href={`/${menu}`}
          className={cls({ selected: pathname === `/${menu}` })}
        >
          {menu}
        </WrappedLink>
      ))}
    </SubNavWrapper>
  );
};

export default SubNavigation;
