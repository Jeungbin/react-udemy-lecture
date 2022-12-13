import React from "react";
import BookShow from "./BookShow";
function BookList({ books, onDelete, onModify }) {
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
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
