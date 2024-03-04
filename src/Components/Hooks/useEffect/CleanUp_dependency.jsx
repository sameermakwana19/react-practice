import React, { useEffect, useState } from "react";

const CleanUp_dependency = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (isShown) {
      // no if condition then flow will be like --> mount - add eventlistener-- re-render-- cleanup - addEventListener -- continue
      function handleEvent(e) {
        setMousePos({
          x: e.clientX,
          y: e.clientY,
        });
        console.log("running handle event func");
      }
      console.log("adding event listener");
      window.addEventListener("mousemove", handleEvent);

      return () => {
        console.log("removing event listener");
        window.removeEventListener("mousemove", handleEvent);
      };
    }
  }, [isShown]);
  return (
    <>
      <button
        onClick={() => {
          setIsShown(!isShown);
        }}
      >
        Track the mouse event
      </button>
      {isShown && (
        <h2>
          X : {mousePos.x}- Y: {mousePos.y}
        </h2>
      )}
    </>
  );
};

export default CleanUp_dependency;
