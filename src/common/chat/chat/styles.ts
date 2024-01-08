import { styled, css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;

  overflow-x: auto;
`;

export const Box = styled.div<{ sender: string }>`
  display: flex;

  align-items: center;

  /* min-height: 50px; */

  ${({ sender }) => css`
    justify-content: ${sender === 'true' ? 'end': 'start'};
  `}

  div {
    display: flex;
    position: relative;

    border-radius: 5px;

    padding: 10px;
    margin: 5px 10px;

    ${({ sender }) => css`
      background-color: ${sender === 'true' ? '#4CAF50' : '#353535'};
    `}

    img {
      max-width: 200px;
      border-radius: 3px;
    }

    p {
      margin: 0;
      padding: 0;

      font-size: 14px;

      color: #fff;
    }

    span {
      position: absolute;

      border-radius: 5px;

      ${({ sender }) => css`
        ${sender === 'true' ? css`
          top: 0px;
          right: -5px;

          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent; 

          border-left: 10px solid #4CAF50;
        ` : css`
          top: 0px;
          left: -5px;

          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent; 

          border-right: 10px solid #353535;
        `}
      `}

    }
  }
`;

export const TextBox = styled.footer`
  display: flex;

  width: 100%;
  min-height: 60px;
`;

export const Input = styled.form`
  display: flex;

  width: 100%;
  height: 50px;

  margin: 0 10px;

  border-radius: 5px;

  background-color: #f1f1f1aa;

  input {
    width: 100%;
    height: 100%;

    border: 0;
    outline: none;
    background-color: transparent;

    font-size: 15px;

    padding: 0 10px;

    color: #303030;
  }

  button {
    display: flex;

    justify-content: center;
    align-items: center;

    min-width: 50px;
    height: 50px;

    border: 0;
    border-radius: 3px;

    cursor: pointer;

    background-color: transparent;
  }
`;

