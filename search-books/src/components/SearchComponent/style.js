import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
`;

export const Input = styled.input`
  margin-right: 1rem;
  padding: 1.2rem 0.6rem;
  height: 5vh;
  width: 40vw;
  color: var(--input-text);
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 0px 2px 1px var(--primary-gray);
  border-radius: 0.4rem;
  outline: 0;
`;

export const Icon = styled.i`
  font-weight: 700;
  color: var(--text-color);
`;

export const GoBackButton = styled(Link)`
  background: none;
  padding: 10px;
  border: none;
`;
export const GoBackButtonIcon = styled.i`
  color: var(--text-color);
  font-size: 30px;
  margin-right: 20px;
`;
