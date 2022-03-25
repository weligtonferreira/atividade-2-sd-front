import React from 'react';
import SearchInput from '../SearchInput';
import { Header, Title } from './style';

export default function HeaderComponent() {
  return (
    <Header>
      <Title>Search Books</Title>
      <SearchInput />
    </Header>
  );
}
