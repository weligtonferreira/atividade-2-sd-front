import styled from 'styled-components';

export const SearchDiv = styled.form`
  display: flex;
`;

export const Input = styled.input`
  padding: 1.2rem 0.6rem;
  height: 5vh;
  width: 40vw;
  color: var(--text-color);
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0px 0px 2px 1px var(--primary-gray);
  border-radius: 0.4rem;
`;

export const Icon = styled.i`
  margin-right: 0.5rem;
  font-weight: 700;
  color: var(--text-color);
`;
