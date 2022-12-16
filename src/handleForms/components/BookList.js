import React from "react";
import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../../context/books";
function BookList({ books, onDelete, onModify }) {
  const value = useContext(BooksContext);
  const renderBooks = books.map((item) => {
    return (
      <BookShow
        key={item.id}
        book={item}
        onDelete={onDelete}
        onModify={onModify}
      />
    );
  });
  return (
    <div className="book-list">
      {value}
      {renderBooks}
    </div>
  );
}

export default BookList;
