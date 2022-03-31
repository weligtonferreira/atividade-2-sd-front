import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BooksList,
  BookDiv,
  BookImage,
  BookTitle,
  Icon,
  Input,
  SearchDiv,
} from './style';
import api from '../../services/api';

export default function Books() {
  const [searchContent, setSearchContent] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const appLocation = useLocation();
  const params = new URLSearchParams(appLocation.search);
  const q = params.get('q');

  const handleSubmit = async () => {
    await api
      .get('/books', {
        params: {
          q,
          key: process.env.REACT_APP_API_KEY,
          maxResults: 20,
        },
      })
      .then(res => {
        setBooks(res.data.items);
      })
      .catch(err => console.error(err));
  };

  const search = () => {
    if (searchContent) navigate(`/books?q=${searchContent}`);
  };

  useEffect(() => {
    handleSubmit();
  }, [q]);

  return (
    <>
      <header>
        <h1>SearchBooks</h1>
        <SearchDiv>
          <Input type='text' onChange={e => setSearchContent(e.target.value)} />
          <button
            type='button'
            style={{
              padding: '10px',
              borderRadius: '0.5rem',
              fontSize: '1rem',
            }}
            className='btn btn-success align-center'
            onClick={() => search()}
          >
            <Icon className='bi bi-search' />
          </button>
        </SearchDiv>
      </header>
      <main>
        <BooksList>
          {books.map((book, index) => {
            const { id, volumeInfo } = book;
            const { imageLinks, title } = volumeInfo;

            return (
              <Link to={`/books/${id}`}>
                <BookDiv key={index}>
                  {imageLinks && (
                    <BookImage src={imageLinks.thumbnail} alt={title} />
                  )}
                  <BookTitle>{title}</BookTitle>
                </BookDiv>
              </Link>
            );
          })}
        </BooksList>
      </main>
    </>
  );
}
