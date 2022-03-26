import React, { useState } from 'react';
import { Icon, Input, SearchDiv } from './style';

export default function SearchInput(props) {
  const [searchContent, setSearchContent] = useState('');

  const handleSubmit = (e) => {
    console.log('Clicou');
    props.onSubmit(searchContent);
    e.preventDefault();
  };

  return (
    <SearchDiv onSubmit={handleSubmit}>
      <Input type='text' onChange={(e) => setSearchContent(e.target.value)} />
      <button type='submit' style={{padding: '10px'}} className='btn btn-success align-center' onClick={() => handleSubmit}>
        <Icon className='bi bi-search' />search something
      </button>
    </SearchDiv>
  );
}
