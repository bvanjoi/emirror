import React from 'react';
import styled from 'styled-components';
import Link from '../../basic-components/link';

type Props = {
  /**
   * the url point at code address.
   */
  url: string;
};

const WrapperDiv = styled.div`
  width: 100%;
  margin: 12px;
  display: flex;
  justify-content: center;
`;

const WrapperSpan = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
`;

const ShowCodeLink = (props: Props) => {
  const { url } = props;
  return (
    <WrapperDiv>
      <Link href={url} target='__blank'>
        <WrapperSpan>SHOW CODE</WrapperSpan>
      </Link>
    </WrapperDiv>
  );
};

export default ShowCodeLink;
