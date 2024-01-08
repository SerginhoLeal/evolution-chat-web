import { styled } from 'styled-components';

export const Container = styled.aside`
  position: relative;

  display: flex;

  flex-direction: column;
  /* align-items: center; */

  min-width: 250px;
  height: 100vh;

  background-color: #252552aa;
  backdrop-filter: blur(3px);

  #button_instance {
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

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  flex-direction: column;

  height: 70%;

  color: #303030;
`;

export const Empty = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  img {
    margin-top: 60px;
  }

  p {
    color: #fff;
  }
`;

export const Contact = styled.button`
  border: 0;
  background-color: transparent;

  display: flex;

  width: 100%;

  margin-bottom: 20px;

  cursor: pointer;

  h3, p {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 13px;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 11px;
    font-weight: 200;
    color: #f1f1f1;
  }

  img {
    width: 50px;
    border-radius: 30px;
  }

  span {
    display: flex;

    height: 100%;
    margin-left: 10px;

    flex-direction: column;
    text-align: start;
    justify-content: center;
  }

  span:nth-child(2) {
    width: 65%;
  }

  div {
    display: flex;

    width: 100%;

    justify-content: space-between;
  }
`;