import React, { useState } from "react";

export default function Modal({ onClick }) {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">I'm a modal</div>
    </div>
  );
}
