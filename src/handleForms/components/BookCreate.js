import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle(" ");
  };
  return (
    <div className="book-create">
      <h3>Add A BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          type="text"
        />
        <button className="button">submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
