import React from 'react';
import styled from 'styled-components';
import Link from '../../basic-components/link';

const IntroStyled = styled.div`
  margin: 0 auto;
  word-break: normal;
`;

const TextCenterParagraph = styled.p`
  text-align: center;
  padding: 0 24px;
`;

const UnderLineSpan = styled.span`
  text-decoration: underline;
`;

const Introduction = () => {
  return (
    <IntroStyled>
      <TextCenterParagraph>
        <strong>EMirror</strong> - a WYSIWYG eidtor based on
        <span> </span>
        <Link>
          <UnderLineSpan>Prosemirror</UnderLineSpan>
        </Link>
        {' and '}
        <Link>
          <UnderLineSpan>React</UnderLineSpan>
        </Link>
        .
      </TextCenterParagraph>
      <TextCenterParagraph>
        It means <i>Extension Prosemirror</i>, and it aims is provide a toolkit
        for build modern web editor fluently.
      </TextCenterParagraph>
    </IntroStyled>
  );
};

export default Introduction;
