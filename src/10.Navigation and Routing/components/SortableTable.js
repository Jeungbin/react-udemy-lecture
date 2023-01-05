import React from "react";
import Table from "./Table";

export default function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th>{column.label} Is sortable</th>,
    };
  });
  return <Table {...props} config={updatedConfig} />;
}
