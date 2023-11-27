import { styled } from 'styled-components';

export const Container = styled.article`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px;

  background-color: #ffffffaa;
  backdrop-filter: blur(3px);

  color: #303030;

  form {
    display: flex;

    flex-direction: column;

    align-items: center;

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

    button {
      display: flex;

      justify-content: space-between;

      border: 0;
      border-radius: 5px;
      padding: 15px 30px;

      margin-top: 10px;

      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;

      color: #fff;
      background-color: #4f65f1;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      cursor: pointer;
    }
  }
`;

export const Empty = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100%;

  p {
    font-size: 15px;
    color: #303030;
  }

  button {
    border: 0;
    border-radius: 5px;
    padding: 15px 30px;

    margin-top: 10px;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;

    color: #fff;
    background-color: #4f65f1;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    cursor: pointer;
  }
`;
