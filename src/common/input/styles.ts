import { styled } from 'styled-components';

export const Container = styled.form`
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