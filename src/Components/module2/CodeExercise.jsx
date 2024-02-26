import React, { useState } from "react";

const CORRECT_CODE = "987654";
const CodeExercise = () => {
  const [code, setCode] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={code}
          maxLength={6}
          onChange={(e) => setCode(e.target.value)}
        />
      </form>
      <h2>{code === CORRECT_CODE ? "UNLOCKING" : "INCORRECT CODE"}</h2>
    </>
  );
};

export default CodeExercise;
