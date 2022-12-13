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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} type="text" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
