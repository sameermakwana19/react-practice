import React from "react";

const FriendlyGreeting = ({ name }) => {
  // const FriendlyGreeting = (props) => {
  const style = {
    fontSize: "20px",
    color: "goldenrod",
  };
  return (
    <>
      <div style={style}>Hi {name}! what's up?</div>
      {/* <div style={style}>Hello {props.name} !, what's up?</div> */}
    </>
  );
};

export default FriendlyGreeting;
