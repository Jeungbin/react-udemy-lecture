import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const handleSubmit = (term) => {
    setBooks([...books, { id: Math.random(), name: term }]);
  };
  console.log(books);
  return (
    <div>
      <BookCreate onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
