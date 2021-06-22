import React from 'react';
import styled from 'styled-components';

const LoadingInner = styled.span`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid rgb(0, 0, 0, 0.2);
  border-top-color: rgb(0, 0, 0);
  animation: spin 1s infinite linear;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingInner />
  </LoadingContainer>
);

export default Loading;
