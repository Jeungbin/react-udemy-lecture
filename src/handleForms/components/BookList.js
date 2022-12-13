import React from "react";
import BookShow from "./BookShow";
function BookList({ books }) {
  const renderBooks = books.map((item) => {
    return <BookShow key={item.id} book={item} />;
  });
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
