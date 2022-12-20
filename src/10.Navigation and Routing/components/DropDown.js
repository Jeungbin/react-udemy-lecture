import React, { useState } from "react";

export default function DropDown({ selected, onSelect, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const hadleClick = () => {
    // setIsOpen(!isOpen);
    setIsOpen((current) => !current);
  };

  const handleOptionClcik = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const rendered = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClcik(option)}
        key={option.value}
        value={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={hadleClick}>
        {/* undifined || 100 => 100
        100 || 200 => 100 */}
        {selected?.label || "select .."}
      </div>
      {isOpen && rendered}
    </div>
  );
}
