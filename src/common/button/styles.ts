import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 3px;
  padding: 15px 30px;

  margin-top: 10px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;

  color: #fff;
  background-color: #4f65f1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  height: 40px;

  cursor: pointer;

  p {
    margin: 0;
    padding: 0;
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