import React, { useState } from 'react';
import { Icon, Input, SearchDiv } from './style';

export default function SearchInput() {
  const [searchContent, setSearchContent] = useState('');

  const handleSubmit = () => {
    console.log('Clicou');
  };

  return (
    <SearchDiv>
      <Input type='text' onChange={(e) => setSearchContent(e.target.value)} />
      <Icon className='bi bi-search' onClick={() => handleSubmit} />
    </SearchDiv>
  );
}
