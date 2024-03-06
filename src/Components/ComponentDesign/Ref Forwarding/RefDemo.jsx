import React, { useEffect, useRef } from "react";
import TextInput from "../PropsDelagation/TextInput";

const RefDemo = () => {
  const ref = useRef();

  useEffect(() => {
    console.log("running");
    console.log(ref.current);
    ref.current.focus();

    return () => {};
  }, []);

  return (
    <>
      <div>RefDemo</div>
      <TextInput ref={ref} label={"Password"} type="password" />
    </>
  );
};

export default RefDemo;
