import React, { useEffect, useState } from "react";

const Test = () => {
  const [value, setValue] = useState(2);

  useEffect(() => {
    function handleEvent() {
      console.log(value);
      // setValue(value + 10); // reading the value from the initial snapshot
      // setValue((value) => value + 10); // getting the fresh value from the component instance (which is maintained by react)
    }
    window.addEventListener("contextmenu", handleEvent);
    return () => {
      window.removeEventListener("contextmenu", handleEvent);
    };
  }, []);
  console.log({ value });

  return (
    <>
      <button
        onClick={() => {
          setValue(value + 2);
        }}
      >
        click
      </button>
    </>
  );
};

export default Test;
