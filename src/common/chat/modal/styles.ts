import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #252525aa;
  backdrop-filter: blur(3px);

  z-index: 2;

  header {
    display: flex;

    justify-content: end;

    width: 100%;
    /* margin: 10px; */

    button {
      border: 0;
      width: 50px;
      height: 50px;

      background-color: transparent;

      cursor: pointer;
    }
  }

  img {
    height: 90%;
    object-fit: cover;

    border-radius: 10px;

    transition: 1s;
  }

  video {
    height: 80%;
    object-fit: cover;

    border-radius: 10px;
    transition: 1s;
  }

  @media(max-width: 900px) {
    img {
      height: 60%;
    }
    video {
      height: 60%;
    }
  }
`;