import { styled } from 'styled-components';

export const Container = styled.footer`
  display: flex;

  width: 100%;
  min-height: 60px;
`;

export const Form = styled.form`
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

export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #252525c9;
  backdrop-filter: blur(1px);

  z-index: 3;
`;

export const ContainerInput = styled.form`
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
`;

export const Preview = styled.div`
  display: flex;
  margin: 10px 0 0 0;

  img {
    object-fit: cover;
    border-radius: 3px;

    max-height: 400px;
  }
`;

export const SubFiles = styled.div`
  display: flex;
  margin: 10px 0 0 0;

  button {
    border: 0;
    background-color: transparent;

    padding: 0;
    margin: 0 5px;

    width: 50px;
    height: 50px;

    cursor: pointer;
  }

  img {
    object-fit: cover;
    border-radius: 3px;

    width: 50px;
    height: 50px;
  }

  video {
    object-fit: cover;
    border-radius: 3px;

    width: 50px;
    height: 50px;
  }
`;