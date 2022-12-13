import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const handleSubmit = (term) => {
    console.log("i would like to see" + term);
    setBooks([...books, { id: Math.random(), name: term }]);
  };
  console.log(books);
  return (
    <div>
      <BookCreate onCreate={handleSubmit} />
    </div>
  );
}

export default App;
