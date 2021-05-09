import React from 'react';
import styled from 'styled-components';
import Link from '../../basic-components/link';

const IntroStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: normal;
`;

const UnderLineSpan = styled.span`
  text-decoration: underline;
`;

const Introduction = () => {
  return (
    <IntroStyled>
      <p>
        <strong>EMirror</strong> - a WYSIWYG eidtor based on{' '}
        <Link>
          <UnderLineSpan>Prosemirror</UnderLineSpan>
        </Link>
        {' and '}
        <Link>
          <UnderLineSpan>React</UnderLineSpan>
        </Link>
        .
      </p>
      <p>
        It means <i>Extension Prosemirror</i>, and it aims is provide a toolkit
        for build modern web editor fluently.
      </p>
    </IntroStyled>
  );
};

export default Introduction;
