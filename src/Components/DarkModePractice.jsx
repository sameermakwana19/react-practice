import React, { useEffect, useState } from "react";

const DarkModePractice = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem("dark-mode"));
    if (storedValue) {
      setIsDarkMode(storedValue);
      console.log("useeffect of fetching ");
    }
  }, []);

  useEffect(() => {
    console.log("use Effect of setData");
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const style = {
    width: "50vw",
    height: "50vh",
  };
  const background = isDarkMode ? "black" : "white";
  const color = isDarkMode ? "white" : "black";

  return (
    <>
      <button
        onClick={() => {
          setIsDarkMode((prev) => !prev);
        }}
      >
        Dark Mode {isDarkMode ? "Off" : "On"}
      </button>
      <div style={{ ...style, background, color }}>DarkModePractice</div>
    </>
  );
};

export default DarkModePractice;
