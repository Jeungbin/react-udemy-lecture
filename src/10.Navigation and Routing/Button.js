import className from "classnames";

// const finalClassName = className({ "bg-blue-500": true  });
// console.log(finalClassName);

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className("px-3 py-1 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-500 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
  });

  return <button className={classes}>{children}</button>;
  //underlying elements <button>
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;

//<Button promary={true}></Button> === <Button promary></Button>
