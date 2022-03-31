import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Input, SearchDiv } from './style';

export default function SearchComponent() {
  const [searchContent, setSearchContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (searchContent) navigate(`/books?q=${searchContent}`);
  };

  return (
    <SearchDiv>
      <Input type='text' onChange={e => setSearchContent(e.target.value)} />
      <button
        type='button'
        style={{ padding: '10px', borderRadius: '0.5rem', fontSize: '1rem' }}
        className='btn btn-success align-center'
        onClick={() => handleSubmit()}
      >
        <Icon className='bi bi-search' />
      </button>
    </SearchDiv>
  );
}
