import React from "react";
import Button from "./Button";
export default function App() {
  return (
    <div>
      <div>
        <Button success primary>
          click me!
        </Button>
      </div>
      <div>
        <Button primary>Buy now!</Button>
      </div>
      <div>
        <Button secondary>Hide Ads</Button>
      </div>
    </div>
  );
}
