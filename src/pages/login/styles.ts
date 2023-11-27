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

export const Container = styled.main`
  display: flex;
  position: relative;

  justify-content: center;

  align-items: center;

  height: 100vh;

  form {
    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 0 30px;

    width: 100%;
    height: 100vh;

    backdrop-filter: blur(1px);

    input {
      margin: 5px 0;
      width: 250px;
      height: 50px;

      border: 0;
      border-radius: 5px;

      padding: 0 20px;
      outline: none;

      color: #303030;
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
`;