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
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}
