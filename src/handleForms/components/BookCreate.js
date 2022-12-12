import React, { useState } from "react";

function BookCreate({ onSubmit }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} type="text" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
