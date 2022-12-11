import React from "react";

function SearchBar({ onSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(document.getElementById("searchTxt").value);
  };
  return (
    <>
      <form id="searchTxt" action="submit" onSubmit={handleFormSubmit}>
        <input type="text" />
      </form>
    </>
  );
}

export default SearchBar;
