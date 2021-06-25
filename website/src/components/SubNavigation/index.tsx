import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledUl = styled.ul`
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  li {
    margin: 0 4px;
    padding: 2px;
    list-style: none;
  }

  a {
    padding: 2px 4px;
    border: 1px solid transparent;
    border-radius: 4px;

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

    &.selected {
      background-color: #eee;
    }
  }
`;

type Props = {
  /**
   * all pages EMirror editor.
   */
  menus: string[];
};

const SubNavigation = (props: Props) => {
  const { menus } = props;
  return (
    <StyledUl>
      {menus.map(menu => (
        <li key={menu}>
          <NavLink
            to={`/${menu}`}
            activeClassName='selected'
            isActive={(match, location) =>
              match?.url === location.pathname
            }
          >
            {menu}
          </NavLink>
        </li>
      ))}
    </StyledUl>
  );
};

export default SubNavigation;
