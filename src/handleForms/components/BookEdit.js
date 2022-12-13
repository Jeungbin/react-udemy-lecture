import React, { useState } from "react";

function BookEdit({ book, onChange }) {
  const [title, setTitle] = useState(book.title);

  const handelSubmit = (e) => {
    e.preventDefault();

    onChange(book.id, title);
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
