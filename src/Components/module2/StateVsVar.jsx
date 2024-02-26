import React, { useState } from "react";

const StateVsVar = () => {
  // let count = 0;
  const [count, setCount] = useState(0); // taking the state from the react rather than redefining
  return (
    <>
      {/* <h2>Count : {count}</h2>
      <button
        onClick={() => {
          count += 1;
          console.log(count);
        }}
      >
        +1
      </button> */}

      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default StateVsVar;
