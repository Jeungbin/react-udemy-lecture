import { useState } from "react";
import AnimalShow from "./AnimalShow";
import BirdImg from "./images/bird.svg";
import CatImg from "./images/cat.svg";
import CowImg from "./images/cow.svg";
import DogImg from "./images/dog.svg";
import GatorImg from "./images/gator.svg";
import HeartImg from "./images/heart.svg";
import HorseImg from "./images/horse.svg";
const randomArray = [];
function App() {
  const animalArray = [BirdImg, CatImg, CowImg, DogImg, GatorImg, HorseImg];
  const [num, setNum] = useState(0);
  const handelPickNum = () => {
    let randomNum = Math.floor(Math.random() * 6);
    randomArray.push(randomNum);
    setNum(randomNum);
  };

  return (
    <div>
      <button onClick={handelPickNum}>Add Animal</button>
      <div id="imageContainer" style={{ display: "flex" }}>
        <AnimalShow
          // heartImg= {randomArray.includes(0) ? }
          animalImg={randomArray.includes(0) ? animalArray[0] : "none"}
        />
        <AnimalShow
          animalImg={randomArray.includes(1) ? animalArray[1] : "none"}
        />
        <AnimalShow
          animalImg={randomArray.includes(2) ? animalArray[2] : "none"}
        />
        <AnimalShow
          animalImg={randomArray.includes(3) ? animalArray[3] : "none"}
        />
        <AnimalShow
          animalImg={randomArray.includes(4) ? animalArray[4] : "none"}
        />
        <AnimalShow
          animalImg={randomArray.includes(5) ? animalArray[5] : "none"}
        />
      </div>
    </div>
  );
}

export default App;
