import React from "react";
import useOnScreen from "./useOnScreen";

const ObserverDemo = () => {
  const [isOnScreen, elementRef] = useOnScreen();
  const [isBlueOnScreen, BlueElementRef] = useOnScreen();
  return (
    <>
      <h2 style={{ position: "fixed" }}>
        Red Box Visible : {isOnScreen ? "yes" : "no"}
      </h2>
      <h2 style={{ position: "fixed", right: "0" }}>
        Blue Box Visible : {isBlueOnScreen ? "yes" : "no"}
      </h2>
      <div
        ref={elementRef}
        style={{
          margin: "150vh 0 0 0",
          width: "500px",
          height: "500px",
          background: "red",
        }}
      >
        Red Box
      </div>
      <div
        ref={BlueElementRef}
        style={{
          margin: "150vh 0 0 0",
          width: "500px",
          height: "500px",
          background: "blue",
        }}
      >
        blue Box
      </div>
    </>
  );
};

export default ObserverDemo;
