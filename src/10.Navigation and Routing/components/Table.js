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

  const renderdRows = data.map((item) => {
    return (
      <tr className="border-b" key={item.name}>
        <td className="p-3">{item.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${item.color}`}></div>
        </td>
        <td className="p-3">{item.score}</td>
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
