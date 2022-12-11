import React from "react";

function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <>
      <input type="text" />
      <button onClick={handleClick}>search</button>
    </>
  );
}

export default SearchBar;
