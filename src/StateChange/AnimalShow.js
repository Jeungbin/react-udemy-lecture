import { useState } from "react";
import "./animalShow.css";
import heart from "./images/heart.svg";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";

const svgMap = {
  // bird: bird
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
export default function AnimalShow({ type }) {
  const [clickNum, setClickNum] = useState(0);
  function handleClick() {
    setClickNum(clickNum + 1);
  }
  return (
    <div onClick={handleClick}>
      <img style={{ width: "10rem" }} src={svgMap[type]}></img>
      <img style={{ width: 10 + 10 * clickNum + "px" }} src={heart}></img>
    </div>
  );
}
