import { css, styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;

  top: 0;

  z-index: -1;

  width: 100%;
  height: 100vh;

  ${({ theme }) => css`
    background-color: ${theme.color.background};
  `};

  #blob-purple-bottom, #blob-blue-top, #blob-yellow, #blob-pink-bright, #blob-orange {
    position: absolute;

    width: 500px;
    height: 500px;
  }

  #blob-purple-bottom {
    bottom: 0;
    right: 0;
  }

  #blob-blue-top {
    top: 0;
    right: 0;
  }

  #blob-yellow {
    right: 0;
  }

  #blob-pink-bright {
    bottom: 0;
    left: 0;
  }

  #blob-orange {
    bottom: 0;
  }
`;