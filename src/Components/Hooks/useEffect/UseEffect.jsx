import React, { useEffect, useState } from "react";
import Counter2 from "../../module2/Counter2";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [demo, setDemo] = useState(false);
  // const [demo, setDemo] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    console.log(count);
    document.title = `${count} - VITE`;
  }, [count]);

  console.log(" outside of useEffect");

  return (
    <>
      <Counter2 count={count} setCount={setCount} />
      <button onClick={() => setDemo(!demo)}>Click to render</button>
      {/* {demo.map((c, i) => (
        <p key={i}>{c}</p>
      ))}
      {demo.map((c, i) => (
        <p key={i}>{c}</p>
      ))} */}
    </>
  );
};

export default UseEffect;
