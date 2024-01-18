import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 60px;

  background-color: #f1f1f1aa;
`;

export const ContentFriend = styled.div`
  display: flex;
`;

export const ContainerImage = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  img {
    width: 50px;
    margin: 0 20px;
    border-radius: 30px;
  }
`;

export const NameAndLastJoin = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;

  font-size: 15px;
  color: #303030;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;

  color: #303030;

  font-size: 11px;
  font-weight: 200;
`;

export const Settings = styled.button`
  border: 0;
  background-color: transparent;

  width: 50px;
  height: 50px;

  margin-right: 1%;

  cursor: pointer;
`;
