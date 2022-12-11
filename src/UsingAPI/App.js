import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    //getting the image frpm the searchImages takes time
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      <ImageList searchWord={images}></ImageList>
    </div>
  );
}
