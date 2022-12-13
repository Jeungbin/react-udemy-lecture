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

  const deleteBookId = (id) => {
    const deletedbook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deletedbook);
  };

  const saveBookId = (id, newItem) => {
    const savedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newItem };
      }
      return book;
    });
    setBooks(savedBook);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookId} onModify={saveBookId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
