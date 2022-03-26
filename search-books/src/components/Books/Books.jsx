import React, { useState } from 'react';
import { BookName, BookDescription, BookDiv, BookList } from './style';

export default function Books(props) {
  const [books, setBooks] = useState(props.books);

  return (
    
    <>
      <BookList>{books.map(book => (
        
        <BookDiv key={book.id}>
          <BookName>{book.name}</BookName>
          <BookDescription>{book.description}</BookDescription>
        </BookDiv>))}
      </BookList>
    </>
  );
}
