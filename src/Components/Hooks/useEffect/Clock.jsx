import React, { useEffect, useState } from "react";
import UseEffect from "./UseEffect";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (isShown) {
      let id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      console.log("running the isshown block");

      return () => {
        console.log("clearing the setInterval");
        clearInterval(id);
      };
    }
  }, [isShown]);

  return (
    <>
      <div>Clock</div>
      <button
        onClick={() => {
          setIsShown(!isShown);
        }}
      >
        {!isShown ? "Show" : "Hide"} Clock
      </button>
      {isShown && (
        <h2>
          {time.getHours()}:{time.getMinutes()}:
          {time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}
        </h2>
      )}
    </>
  );
};

export default Clock;
