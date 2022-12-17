import React from "react";
import Button from "./Button";
import { GoBell } from "react-icons/go";
export default function App() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button outline success primary onClick={handleClick}>
          <GoBell className="mr-1" />
          click me!
        </Button>
      </div>
      <div>
        <Button rounded secondary primary>
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
