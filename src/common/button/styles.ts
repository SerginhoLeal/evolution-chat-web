import { css, styled } from "styled-components";

const prefix = css`
  display: flex;

  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 3px;

  font-size: 14px;

  font-weight: 500;
  letter-spacing: 1px;
`;

interface ButtonProps {
  standard: string,
}

export const Container = styled.button<ButtonProps>`
  ${prefix};

  ${({ standard }) => css`
    background-color: ${standard};
  `};

  padding: 15px 30px;

  margin-top: 10px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  height: 40px;

  cursor: pointer;

  p {
    margin: 0;
    padding: 0;
    color: #fff;
  }

  span {
    display: inline-block;
  }
  span:after {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 15px;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Component = styled.div`
  position: relative;

  margin: 0 0 0 10px;

  min-width: 50px;
  height: 50px;

  border-radius: 3px;

  background-color: #f1f1f1;
`;

export const Button = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 0;

  cursor: pointer;

  background-color: transparent;
`;

export const Options = styled.span`
  position: absolute;

  bottom: 55px;

  /* min-width: 50px;
  min-height: 50px; */

  width: 500px;
  /* height: 400px; */

  border-radius: 3px;

  /* background-color: #f1f1f1; */

  /* backdrop-filter: blur(2px); */

  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 1px 2px; */
`;

export const SelectFiles = styled.input`
  ${prefix};

  padding: 15px 30px;

  margin-top: 10px;

  background-color: #4f65f1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  height: 40px;

  cursor: pointer;
`;