import React, { useState } from "react";
import Exercise2_UseEffect from "./Exercise2_UseEffect";

const CleanUpFunction = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>Show Dimensions</button>
      {isShown && <Exercise2_UseEffect />}
    </>
  );
};

export default CleanUpFunction;
