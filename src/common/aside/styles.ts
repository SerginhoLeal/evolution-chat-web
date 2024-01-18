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

  transition: 1s;
  overflow: hidden;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;

    margin-top: 5px;
    margin-bottom: 5px;
  }

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

  @media(max-width: 700px) {
    min-width: 60px;
    .react {
      display: none;
    }
    .vite {
      display: none;
    }
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

  margin-bottom: 5px;

  cursor: pointer;

  h3, p {
    margin: 0;
    padding: 0;
  }

  span:nth-child(2) {
    width: 65%;
  }

  @media(max-width: 700px) {
    margin-bottom: 5px;
  }
`;

export const Image = styled.div`
  display: flex;

  height: 100%;

  img {
    width: 50px;
    border-radius: 30px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
  margin-left: 10px;

  flex-direction: column;
  text-align: start;
  justify-content: center;

  h3 {
    font-size: 13px;
    margin-bottom: 5px;
  }

  @media(max-width: 700px) {
    display: none;
  }
`;

export const DataUser = styled.div`
  display: flex;
  align-items: end;

  width: 100%;

  justify-content: space-between;

  span {
    max-width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: green;
    margin-bottom: 6px;
  }

  p {
    font-size: 11px;
    font-weight: 200;

    color: #f1f1f1;

    /* margin-left: 5px; */

    font-weight: 700;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`;
