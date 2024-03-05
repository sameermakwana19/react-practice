import React, { useCallback, useState } from "react";

const ButtonComponent = React.memo(function ButtonComponent({ increaseCount }) {
  console.log("running the Button component");
  return (
    <>
      <button onClick={increaseCount}>Increase the Count</button>
    </>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // const increaseCount = () => {
  // console.log('creating function');
  //   setCount((prev) => prev + 1);
  // };

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("running UseCallback");
  return (
    <>
      <div>UseCallback</div>
      <h2>Count : {count}</h2>

      <ButtonComponent increaseCount={increaseCount} />
    </>
  );
};

export default UseCallback;
