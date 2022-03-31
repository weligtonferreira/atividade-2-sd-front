import styled from 'styled-components';

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
  font-family: 'Roboto', sans-serif;
  box-shadow: 0px 0px 2px 1px var(--primary-gray);
  border-radius: 0.4rem;
  outline: 0;
`;

export const Icon = styled.i`
  font-weight: 700;
  color: var(--text-color);
`;

export const BooksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  padding: 1rem 1rem;
`;

export const BookDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  padding: 1rem;
  width: 150px;
`;

export const BookImage = styled.img`
  height: 150px;
  margin-bottom: 0.4rem;
  border-radius: 0.6rem;

  &:hover {
    box-shadow: 0px 0px 2px 2px var(--primary-gray);
  }
`;

export const BookTitle = styled.h3`
  font-size: 0.8rem;
  text-align: left;
  font-family: 'Poppins', Verdana, Geneva, Tahoma, sans-serif;
`;
