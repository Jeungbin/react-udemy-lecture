import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    // //BAD CODE
    // books.push({id:123, title:title})
    // setBooks(books)
    // books.length => stays at '0'
    // title: title =>title
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
