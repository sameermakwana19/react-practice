import React, { useState } from "react";

const Counter2 = ({ initialValue = 99 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 10)}>+10</button>
      <button onClick={() => setCount(initialValue)}>
        Reset to Initial Value
      </button>
      <button
        onClick={() => {
          const newValue = Math.max(Math.ceil(Math.random() * 100), 1);
          setCount(newValue);
        }}
      >
        Random Value
      </button>
      <button
        onClick={() => {
          setCount(count - 10);
        }}
      >
        -10
      </button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};

export default Counter2;
