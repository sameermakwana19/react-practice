import React from "react";

const ExpressionSlots = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div>Array length : {arr.length}</div>
      <div>Sum of Arr : {arr.reduce((acc, curr) => acc + curr)}</div>
      <div>ARRAY : {arr.sort().join("-")}</div>
      <div>
        ARRAY :{" "}
        {arr.map((item, index) => (
          <span key={index}>{item}-</span>
        ))}
      </div>
    </>
  );
};

export default ExpressionSlots;
