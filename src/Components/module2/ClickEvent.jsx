import React from "react";
import Button from "../module1/Button";
// import { Button } from "../module1/Button";

const ClickEvent = () => {
  function clickHandler(type) {
    // if (type === "cancel") {
    //   alert("you clicked the cancel button");
    // } else {
    //   alert("you clicked the confirm button");
    // }
    let text = {
      cancel: "cancel",
      confirm: "confirm",
    };
    alert(`You clicked the ${text[type]} button`);
  }

  return (
    <>
      {/* passing func as props for custom components */}
      {/* <Button
        status="cancel"
        handleClick={() => alert("you just clicked the cancel button")}
      >
        Cancel Button
      </Button>
      <Button
        status="confirm"
        handleClick={() => alert("you just clicked the confirm button")}
      >
        Confirm Button
      </Button> */}
      <button onClick={() => clickHandler("cancel")}>Cancel</button>&nbsp;
      <button onClick={() => clickHandler("confirm")}>Confirm</button>
    </>
  );
};

export default ClickEvent;
