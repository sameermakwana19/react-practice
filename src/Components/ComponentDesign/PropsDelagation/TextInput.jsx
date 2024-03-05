import React, { useId } from "react";

const TextInput = ({ id, label, ...delegated }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <br />
      <input id={appliedId} {...delegated} />
    </>
  );
};

export default TextInput;
