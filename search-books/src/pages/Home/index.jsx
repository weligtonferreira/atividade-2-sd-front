import React from "react";
import SearchInput from "../../components/SearchInput";
import Books from "../../components/Books/Books";

export default function Home() {
  return (
    <main>
      <h1 className="App-title">Search Books</h1>
      <SearchInput></SearchInput>
      <Books
        books={[
          { id: 0, name: "A Fundação", description: "Lorem Ipsum" },
          { id: 1, name: "A Fundação", description: "Lorem Ipsum" },
        ]}
      ></Books>
    </main>
  );
}
