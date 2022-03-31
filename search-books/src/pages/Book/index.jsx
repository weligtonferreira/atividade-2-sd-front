import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookDiv, BookImage, BookTitle } from './style';
import api from '../../services/api';

export default function Book() {
  const defaultBook = {
    id: '',
    title: '',
    imageLinks: null,
  };

  const [book, setBook] = useState(defaultBook);
  const appParams = useParams();
  const { id } = appParams;
  console.log(appParams);

  const handleSubmit = async () => {
    await api
      .get(`/books/${id}`, {
        params: {
          key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(res => {
        setBook(res.data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    handleSubmit();
  }, [id]);

  const { imageLinks, title } = book.volumeInfo;
  console.log(book);

  return (
    <main>
      <BookDiv key={id}>
        {imageLinks && <BookImage src={imageLinks.thumbnail} alt={title} />}
        <BookTitle>{title}</BookTitle>
      </BookDiv>
    </main>
  );
}
