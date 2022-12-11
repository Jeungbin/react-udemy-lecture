import React, { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // onSubmit(document.querySelector('input).value);
    onSubmit(term);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input onChange={handleChange} value={term} type="text" />
      </form>
    </div>
  );
}

export default SearchBar;
