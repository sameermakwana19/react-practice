import React, { createContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const UserContext = createContext();

const ContextDemo = () => {
  const user = {
    name: "sam",
    id: 1,
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </UserContext.Provider>
    </>
  );
};

export default ContextDemo;

// contextDemo
// |   |    |
// a   b    c
//     |    |
//     f    D
//          |
//          E
