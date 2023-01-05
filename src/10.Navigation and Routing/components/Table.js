import React from "react";

export default function Table({ data }) {
  const renderdRows = data.map((item) => {
    return (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>
          <div className=" h-10 w-10"></div>
        </td>
        <td>{item.score}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderdRows}</tbody>
    </table>
  );
}
