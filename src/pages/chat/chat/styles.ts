import { styled, css } from 'styled-components';

export const Container = styled.main`
  display: flex;

  width: 100%;
  height: 100vh;

  position: relative;
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

export const Chat = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

interface BoxProps {
  sender: string;
}

export const Box = styled.div<BoxProps>`
  display: flex;

  align-items: center;

  min-height: 50px;

  ${({ sender }) => css`
    justify-content: ${sender === 'true' ? 'end': 'start'};
  `}

  div {
    display: flex;

    border-radius: 5px;

    padding: 10px;
    margin: 5px 0;

    ${({ sender }) => css`
      background-color: ${sender === 'true' ? '#4CAF50' : '#353535'};
    `}

    p {
      margin: 0;
      padding: 0;
    }
  }

`;

export const TextBox = styled.form`
  display: flex;

  width: 100%;

  input {
    width: 100%;
    height: 50px;

    margin-right: 5px;

    border: 0;
    border-radius: 5px;

    font-size: 15px;

    padding: 0 20px;
    outline: none;

    background-color: #303030aa;
  }

  button {
    width: 100px;
    height: 50px;

    border: 0;
    border-radius: 5px;

    background-color: #303030aa;

    cursor: pointer;
  }
`;

export const Empty = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100%;

  p {
    font-size: 20px;
    color: #303030;
  }
`;