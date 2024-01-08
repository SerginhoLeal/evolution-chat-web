import { styled } from "styled-components";

export const Container = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  backdrop-filter: blur(1px);
`;

export const Modal = styled.div`
  position: absolute;

  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #252525aa;
  backdrop-filter: blur(3px);

  z-index: 1px;

  img {
    border-radius: 3px;
  }

  .container_input {
    display: flex;

    width: 50%;
    height: 50px;

    margin: 10px;

    border-radius: 5px;

    background-color: #303030aa;

    input {
      width: 100%;
      height: 100%;

      border: 0;
      outline: none;
      background-color: transparent;

      font-size: 15px;

      padding: 0 10px;

      color: #fff;
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
  }

`;
