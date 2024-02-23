import React from "react";

const Button = ({ status = "default", children }) => {
  // let themeColor;
  // if (status === "cancel") {
  //   themeColor = "red";
  // } else if (status === "confirm") {
  //   themeColor = "green";
  // } else {
  //   themeColor = "goldenrod";
  // }

  let themeColor = {
    cancel: "red",
    confirm: "green",
    default: "gray",
  };

  const style = {
    border: "2px solid",
    // color: themeColor,
    color: themeColor[status],
    // borderColor: themeColor,
    borderColor: themeColor[status],
    background: "white",
    borderRadius: 4,
    padding: 16,
    margin: 8,
  };

  return (
    <>
      <button style={style}>{children}</button>
    </>
  );
};

export default Button;
