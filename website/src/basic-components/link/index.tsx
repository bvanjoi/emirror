import styled from 'styled-components';

const Link = styled.a`
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

export default Link;
