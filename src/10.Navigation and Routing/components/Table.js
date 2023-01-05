import React from "react";

export default function Table({ data, config }) {
  //   const keys = Object.keys(data[0]);
  //   console.log(keys);
  //   const renderedTops = keys.map((name) => {
  //     return <th>{name}</th>;
  //   });

  const renderdHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderdRows = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name}>
        <td className="p-3">{config[0].render(fruit)}</td>
        <td className="p-3">{config[1].render(fruit)}</td>
        <td className="p-3">{config[2].render(fruit)}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderdHeaders}</tr>
      </thead>
      <tbody>{renderdRows}</tbody>
    </table>
  );
}
