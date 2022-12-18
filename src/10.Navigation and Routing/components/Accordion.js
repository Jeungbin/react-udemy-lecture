import React, { useState } from "react";

export default function Accordion({ items }) {
  const [expandedIndex, setEpandedIndex] = useState(0);

  const handleClick = (id) => {
    setEpandedIndex();
  };
  const renderedItmes = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const content = isExpanded && <div>{item.content}</div>;
    return (
      <div key={item.id}>
        <div onClick={handleClick}>{item.label}</div>
        <div>{content}</div>
      </div>
    );
  });
  return <div>{renderedItmes}</div>;
}
