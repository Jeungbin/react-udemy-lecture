import React from "react";

function ImageShow({ image }) {
  // console.log(image.urls[regular]);
  return (
    <div>
      <img style={{ width: "10rem" }} src={image.urls.regular} />
    </div>
  );
}

export default ImageShow;
