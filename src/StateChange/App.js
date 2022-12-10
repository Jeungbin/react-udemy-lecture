import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./app.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    //animals.push(getRandomAnimal()) => modifies a piece of state
    setAnimals([...animals, getRandomAnimal()]);
  }
  console.log(animals);
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div
        className="animal-list"
        id="imageContainer"
        style={{ display: "flex" }}
      >
        {renderAnimals}
      </div>
    </div>
  );
}

export default App;
