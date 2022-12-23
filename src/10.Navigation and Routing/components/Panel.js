import React from "react";
import classNames from "classnames";

export default function Panel({ children, className, ...rest }) {
  const finelClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finelClassNames}>
      {children}
    </div>
  );
}
