import { styled, css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;

  overflow-x: auto;
`;

interface BoxProps {
  sender: boolean;
  height?: number;
  // width: number;
}

export const Box = styled.div<BoxProps>`
  display: flex;

  align-items: center;

  ${({ sender }) => css`
    justify-content: ${sender ? 'end': 'start'};
  `}
`;

const prefixFile = css`
  display: flex;
  position: relative;
  
  flex-direction: column;

  border-radius: 10px;

  padding: 3px;
  margin: 3px 10px;

  outline: 0;

  p {
    margin: 0;
    padding: 5px 0;

    font-size: 14px;

    color: #fff;
  }

  span {
    position: absolute;
    /* z-index: 1; */
  }
`;

export const ImageMessage = styled.button<BoxProps>`
  ${prefixFile};

  border: 0;
  cursor: pointer;

  ${({ theme, sender }) => css`
    background-color: ${theme.color[sender ? 'primary' : 'secondary']};
  `}

  img {
    width: 300px;
    border-radius: 8px;
    z-index: 1;
  }

  @media(max-width: 700px) {
    img {
      width: 300px;
      border-radius: 8px;
      z-index: 1;
    }
  }
`;

export const VideoMessage = styled.button<BoxProps>`
  ${prefixFile};

  border: 0;
  cursor: pointer;

  ${({ theme, sender }) => css`
    background-color: ${theme.color[sender ? 'primary' : 'secondary']};
  `}

  video {
    width: 300px;
    border-radius: 8px;
    z-index: 1;
  }
`;

export const Message = styled.div<BoxProps>`
  ${prefixFile};

  border-radius: 5px;
  padding: 0 10px;

  ${({ theme, sender }) => css`
    background-color: ${theme.color[sender ? 'primary' : 'secondary']};
  `}
`;
