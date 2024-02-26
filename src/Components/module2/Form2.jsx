import React, { useState } from "react";

const Form2 = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          alert("form Submitted successfully");
          setSearch("");
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <h2>State value : {search}</h2>
    </>
  );
};

export default Form2;
