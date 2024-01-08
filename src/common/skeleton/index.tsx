import React from 'react';

import { css, styled } from 'styled-components';

interface Props {
  loading: boolean;
  width: string;
  height: string;
}

const Container = styled.div<Props>`
  ${({ loading, width, height }) => css`
    ${loading ?
      css`display: flex;` :
      css`display: none;`
    };

    width: ${width}px;
    height: ${height}px;
  `};

  margin-bottom: 5px;

  background: #eeeeeeaa;
  background: linear-gradient(110deg, #ecececaa 8%, #f5f5f5aa 18%, #ecececaa 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const Skeleton: React.FC<Props> = ({ loading, width, height }: Props) => {
  return (
    <Container loading={loading} width={width} height={height} />
  );
}
