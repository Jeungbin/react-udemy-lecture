import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    //BAD CODE
    // books.push({id:123, title:title})
    // setBooks(books)
    // books.length => stays at '0'
    // title: title =>title

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookId = async (id) => {
    const response = await axios.delete("http://localhost:3001/books/" + id);

    const deletedbook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deletedbook);
  };

  const saveBookId = async (id, newItem) => {
    const response = await axios.put("http://localhost:3001/books/" + id, {
      title: newItem,
    });
    const savedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(savedBook);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookId} onModify={saveBookId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
