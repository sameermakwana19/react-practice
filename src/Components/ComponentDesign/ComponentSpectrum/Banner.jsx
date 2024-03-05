import React from "react";
import "./banner.css";

const Banner = ({ type, children, name = "" }) => {
  let variants = {
    success: "rgb(69, 207, 5)",
    warning: "#eb6600",
    error: "red",
  };

  const background = variants[type] ?? "gray";

  return (
    <div className={`banner ${name || ""}`} style={{ background }}>
      {children}
    </div>
  );
};

export default Banner;
