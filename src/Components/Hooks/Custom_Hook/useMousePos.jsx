import React, { useEffect, useState } from "react";

const useMousePos = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleEvent(e) {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
      console.log("runnin");
    }
    console.log("adding eventlistener");
    window.addEventListener("mousemove", handleEvent);

    return () => {
      console.log("removing event listener");
      window.removeEventListener("mousemove", handleEvent);
    };
  }, []);

  return mousePos;
};

export default useMousePos;
