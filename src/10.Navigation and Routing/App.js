import { useState } from "react";
import DropDown from "./components/DropDown";

export default function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };
  console.log(selected);
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <DropDown
      value={selected}
      onChange={handleSelect}
      options={options}
    ></DropDown>
  );
}
