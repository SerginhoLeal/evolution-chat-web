import React from 'react';

import { css, styled } from 'styled-components';

interface Props {
  loading: string;
  size: number;
}

const Container = styled.div<Props>`
  span {
    ${({ loading }) => css`
      display: ${loading === 'true' ? 'inline-block' : 'none'};
    `}
  }
  span:after {
    content: " ";
    display: block;
    ${({ size }) => css`
      width: ${size}px;
      height: ${size}px;
      border: ${size / 5}px solid #4f65f1;
    `}
    border-radius: 50px;
    border-color: #4f65f1 transparent #4f65f1 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading: React.FC<Props> = ({ loading, size = 25 }: Props) => {
  return (
    <Container loading={loading} size={size}>
      <span />
    </Container>
  );
}
