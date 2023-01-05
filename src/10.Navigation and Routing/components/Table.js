import React from "react";

export default function Table({ data, config, keyFn }) {
  //   const keys = Object.keys(data[0]);
  //   console.log(keys);
  //   const renderedTops = keys.map((name) => {
  //     return <th>{name}</th>;
  //   });

  const renderdHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderdRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    keyFn;
    return (
      <tr className="border-b" key={keyFn}>
        {renderedCells}
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
