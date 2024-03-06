import React, { useId } from "react";

const TextInput = ({ id, label, ...delegated }, ref) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <br />
      <input ref={ref} id={appliedId} {...delegated} />
    </>
  );
};

// export default TextInput;
export default React.forwardRef(TextInput);
