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

  const changeOpen = (id, newTitle) => {
    setOpen(false);
    onModify(id, newTitle);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="" />
      <div style={{ display: "flex" }}>
        <button onClick={toggleUpdateForm}>update</button>
        <button onClick={handleClick}>Delete</button>
      </div>
      <div className="mainSection">
        {open ? <BookEdit book={book} onChange={changeOpen} /> : book.title}
      </div>
    </div>
  );
}

export default BookShow;
