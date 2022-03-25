import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 15vh;
  padding: 1rem 2rem;
  background-color: var(--primary-gray);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.1rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: var(--header-title-color);
`;
