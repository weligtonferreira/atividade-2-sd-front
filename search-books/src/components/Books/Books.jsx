import React, { useState } from 'react';
import { BookName, BookDescription, BookDiv, BookList } from './style';

export default function Books({ props }) {
  console.log(props, 'Books component');
  const [books, setBooks] = useState(props.itens);

  return (
    <>
      <BookList>
        {books.map(book => (
          <BookDiv key={book.id}>
            <BookName>{book.name}</BookName>
            <BookDescription>{book.description}</BookDescription>
          </BookDiv>
        ))}
      </BookList>
    </>
  );
}
