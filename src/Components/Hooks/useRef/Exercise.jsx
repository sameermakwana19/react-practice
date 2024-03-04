import React, { useRef } from "react";

const Exercise = () => {
  const divRef = useRef();
  return (
    <>
      <div
        ref={divRef}
        style={{ width: "500px", height: "500px", background: "goldenrod" }}
      ></div>
      <button
        onClick={() => {
          console.log(divRef);
          divRef.current.style.width = "250px";
        }}
      >
        Click to change the width of box
      </button>
    </>
  );
};

export default Exercise;
