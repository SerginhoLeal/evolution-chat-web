import { css, styled } from 'styled-components';

export const Background = styled.div`
  display: flex;
  position: absolute;

  width: 100%;
  height: 100vh;

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

export const Container = styled.article`
  display: flex;

  width: 100%;
  height: 100vh;

  position: relative;

  background-color: rgba(255, 255, 255, 0.5);
`;

export const Empty = styled.section`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.5);
`;
