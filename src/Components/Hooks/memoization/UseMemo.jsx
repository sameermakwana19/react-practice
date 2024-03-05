import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [fibNum, setFibNum] = useState(1);
  const [input, setInput] = useState("");

  console.log("running");

  function fib(num) {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
  }

  let result = useMemo(() => {
    return fib(fibNum);
  }, [fibNum]);

  // let result = fib(fibNum);

  return (
    <>
      <h2>Fib Num Input </h2>
      <input
        value={fibNum}
        onChange={(e) => {
          setFibNum(e.target.value);
        }}
      />
      <h2>Fib Num : {result}</h2>

      <p>Random input </p>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
};

export default UseMemo;
