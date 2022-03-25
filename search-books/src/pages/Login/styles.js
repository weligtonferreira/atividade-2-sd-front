import styled from "styled-components";

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 40px;
  background-color: #ffffff;
  border-radius: 5px;
  border: var(--submit-button) solid 1px;
  overflow: hidden;
  cursor: pointer;
`;
export const LoginButtonImg = styled.img`
  width: 20px;
  margin: 0 15px;
`;
export const LoginButtonLabel = styled.p`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  color: #ffffff;
  font-weight: bold;
  background: var(--submit-button);
`;
