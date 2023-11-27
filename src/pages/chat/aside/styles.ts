import { styled } from 'styled-components';

export const Container = styled.aside`
  position: relative;

  min-width: 250px;
  height: 100vh;
  background-color: #f1f1f1aa;

  backdrop-filter: blur(3px);

  button {
    display: flex;

    align-items: center;
    justify-content: center;

    border: 0;
    background-color: transparent;

    width: 100%;
    height: 40px;

    cursor: pointer;

    color: #303030;
  }

  nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    color: #303030;

    ul {
      display: flex;

      justify-content: center;
      flex-direction: column;

      margin: 10px;
      padding: 15px 0px;

      list-style-type: none;

      width: 100%;

      border-radius: 2px;

      font-size: 14px;

      span {
        display: flex;

        justify-content: center;
        align-items: center;
      }

      li {
        display: flex;

      }
    }

    form {

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
  }

  header {
    display: flex;

    width: 100%;

    justify-content: center;
    align-items: center;
  }

  footer {
    position: absolute;
    bottom: 0;

    display: flex;

    width: 100%;

    justify-content: center;
    align-items: center;
  }
`;
