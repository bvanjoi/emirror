import React from 'react';
import cls from 'classnames';
import Link from '../../basic-components/link';
import styled from 'styled-components';

const SubNavUl = styled.ul`
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SubNavLi = styled.li`
  margin: 0 4px;
  padding: 4px;
  list-style: none;

  &.selected {
    background-color: #eee;
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

const SubNavigation = (props: Props) => {
  const { menus, pathname } = props;
  return (
    <SubNavUl>
      {menus.map((menu) => (
        <SubNavLi
          key={menu}
          className={cls({ selected: pathname === `/${menu}` })}
        >
          <Link href={`#/${menu}`}>{menu}</Link>
        </SubNavLi>
      ))}
    </SubNavUl>
  );
};

export default SubNavigation;
