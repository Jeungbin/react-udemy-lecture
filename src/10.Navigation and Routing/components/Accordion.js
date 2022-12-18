import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
export default function Accordion({ items }) {
  const [expandedIndex, setEpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (nextIndex === expandedIndex) {
      setEpandedIndex(-1);
    } else setEpandedIndex(nextIndex);
  };

  const renderedItmes = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 border-b bg-gray-50 items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b">{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItmes}</div>;
}
