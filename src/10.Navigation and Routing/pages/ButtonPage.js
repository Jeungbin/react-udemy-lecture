import React from "react";
import Button from "../components/Button";
import { GoBell } from "react-icons/go";
export default function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button outline success primary className="mb-5" onClick={handleClick}>
          <GoBell className="mr-1" />
          click me!
        </Button>
      </div>
      <div>
        <Button onMouseEnter={handleClick} rounded secondary primary>
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning secondary>
          Hide Ads
        </Button>
      </div>
    </div>
  );
}
