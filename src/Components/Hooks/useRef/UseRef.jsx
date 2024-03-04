import React, { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef();
  // const [demo, setDemo] = useState(true);
  console.log(inputRef);
  return (
    <>
      {/* {demo && <input ref={inputRef} />} */}
      <input ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef);
          // setDemo(!setDemo);
          inputRef.current.focus();
        }}
      >
        Focus input
      </button>
    </>
  );
};

export default UseRef;
