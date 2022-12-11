import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";
export default function ImageList({ searchWord }) {
  // const getImage = searchWord.map((item, index) => {
  //   return <ImageShow image={item.links.html} key={index} />;
  // });

  const renderedImages = searchWord.map((image) => {
    return <ImageShow className="image-list" image={image} key={image.id} />;
  });

  return <div>{renderedImages}</div>;
}
