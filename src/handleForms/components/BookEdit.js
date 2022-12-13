import React, { useState } from "react";

function BookEdit({ book, onModify, onChange }) {
  const [title, setTitle] = useState(book.title);

  const handelSubmit = (e) => {
    e.preventDefault();
    onModify(book.id, title);
    onChange();
  };

  const handleChange = (e) => {
    // e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handelSubmit}>
      <input onChange={handleChange} value={title} type="text" />
      <button>Save</button>
    </form>
  );
}

export default BookEdit;
