import React, { useEffect, useState, useRef } from "react";
import Panle from "./Panle";
import { GoChevronDown } from "react-icons/go";

export default function DropDown({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  // divel = eiv element

  useEffect(() => {
    const handler = (e) => {
      if(!divEl.current){
        return
      }

      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      // clean up call function
      document.removeEventListener("click", handler);
    };
  }, []);

  const hadleClick = () => {
    // setIsOpen(!isOpen);
    setIsOpen((current) => !current);
  };

  const handleOptionClcik = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const rendered = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClcik(option)}
        key={option.value}
        value={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panle
        className="flex justifiy-between items-center cursor-pointer"
        onClick={hadleClick}
      >
        {/* undifined || 100 => 100
        100 || 200 => 100 */}

        {value?.label || "select .."}
        <GoChevronDown className="text-lg" />
      </Panle>
      {isOpen && <Panle className="absolute top-full">{rendered}</Panle>}
    </div>
  );
}
