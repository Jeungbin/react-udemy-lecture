import React, { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onModify }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    onDelete(book.id);
  };

  const toggleUpdateForm = () => {
    setOpen(!open);
  };

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="book-show">
      <div style={{ display: "flex" }}>
        <button onClick={toggleUpdateForm}>update</button>
        <button onClick={handleClick}>Delete</button>
      </div>
      <div className="mainSection">
        {open ? (
          <BookEdit book={book} onModify={onModify} onChange={changeOpen} />
        ) : (
          book.title
        )}
      </div>
    </div>
  );
}

export default BookShow;
