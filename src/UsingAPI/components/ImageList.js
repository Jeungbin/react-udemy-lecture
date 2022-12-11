import React from "react";

export default function ImageList({ term }) {
  console.log(term);
  return (
    <div>
      <img src={term} style={{ width: "1rem" }} alt="" />
    </div>
  );
}
