import React, { useState, useEffect } from "react";

const Exercise2_UseEffect = () => {
  const [dimen, setDimen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function addEvent() {
      console.log("effect funct");
      setDimen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    console.log("adding event listener");
    window.addEventListener("resize", addEvent);

    return () => {
      console.log("cleanup function running");
      window.removeEventListener("resize", addEvent);
    };
  }, []);

  return (
    <>
      <h2>
        {dimen.width} / {dimen.height}
      </h2>
    </>
  );
};

export default Exercise2_UseEffect;
