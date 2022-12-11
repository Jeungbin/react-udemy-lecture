import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // onSubmit(document.querySelector('input).value);
    onSubmit();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={term} type="text" />
      </form>
    </>
  );
}

export default SearchBar;
