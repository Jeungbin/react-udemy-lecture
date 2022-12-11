import React from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
export default function App() {
  function handleSubmit(term) {
    searchImages(term);
    console.log(term);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {/* <ImageList term={term}></ImageList> */}
    </div>
  );
}
