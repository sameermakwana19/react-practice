import React, { useState } from "react";
import Clock from "../Custom_Hook/Clock";
import useMousePos from "./useMousePos";
import useToggle from "./useToggle";

function MousePointer() {
  const mousePos = useMousePos();
  return (
    <h2>
      {mousePos.x} /{mousePos.y}
    </h2>
  );
}
const Custom_hook = () => {
  // const [show, setShow] = useState(true);

  const [show, toggleShow] = useToggle();
  const [mouseShow, toggleMouseShow] = useToggle();

  return (
    <>
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Clock
      </button> */}
      {/*  
      {show && <Clock />} */}

      {/* use Toggle hook demo */}
      <button onClick={toggleShow}>Toggle Clock</button>
      {show && <Clock />}

      {/* end of use Toggle hook demo */}

      {/* Mouse Pos  */}
      <button onClick={toggleMouseShow}>Click to track mouse position</button>
      {mouseShow && <MousePointer />}
    </>
  );
};

export default Custom_hook;
