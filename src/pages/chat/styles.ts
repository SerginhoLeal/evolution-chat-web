import { styled } from 'styled-components';

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

export const Container = styled.main`
  display: flex;

  width: 100%;
  height: 100vh;

  position: relative;

  .logo {
    height: 2em;
    padding: 1em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;

  background-color: #ffffffaa;
  backdrop-filter: blur(3px);
`;
