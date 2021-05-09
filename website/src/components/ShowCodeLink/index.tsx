import React from 'react';
import styled from 'styled-components';
import Link from '../../basic-components/link';

type Props = {
  /**
   * the url point at code address.
   */
  url: string;
};

const Wrap = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
`;

const ShowCodeLink = (props: Props) => {
  const { url } = props;
  return (
    <Wrap>
      <Link href={url} target="__blank">
        SHOW CODE
      </Link>
    </Wrap>
  );
};

export default ShowCodeLink;
