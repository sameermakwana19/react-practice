import React, { useEffect, useRef, useState } from "react";

const EventListeners = () => {
  const inpRef = useRef();
  const [demo, setDemo] = useState(false);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleEvent = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    console.log("addeventListener");
    window.addEventListener("mousemove", handleEvent);
  }, []);

  useEffect(() => {
    inpRef.current.focus();
  }, []);
  console.log("render");

  return (
    <>
      X: {mousePos.x}
      Y: {mousePos.y}
      <br />
      <input type="text" ref={inpRef} />
      <button
        onClick={() => {
          setDemo(!demo);
        }}
      >
        Click
      </button>
    </>
  );
};

export default EventListeners;
