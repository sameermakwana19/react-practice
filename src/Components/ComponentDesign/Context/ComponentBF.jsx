import React, { useContext } from "react";
import { UserContext } from "./ContextDemo";

const ComponentBF = () => {
  const { name, id } = useContext(UserContext);
  return (
    <>
      <div>ComponentBF</div>
      <h2>UserName : {name}</h2>
      <h2>Id : {id}</h2>
    </>
  );
};

export default ComponentBF;
