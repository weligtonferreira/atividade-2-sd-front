import React, {useState} from "react";
import SearchInput from "../../components/SearchInput";
import Books from "../../components/Books/Books";

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    setBooks([
      { id: 0, name: "A Fundação", description: "Lorem Ipsum" },
      { id: 1, name: "A Fundação", description: "Lorem Ipsum" },
    ]);
  };

  return (
    <main>
      <h1 className="App-title">Search Books</h1>
      <SearchInput onSubmit={handleSubmit}></SearchInput>
      <Books
        key={String(books)}
        books={books}
      ></Books>
    </main>
  );
}
