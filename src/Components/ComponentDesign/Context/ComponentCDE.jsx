import React, { useContext } from "react";
import { UserContext } from "./ContextDemo";

const ComponentCDE = () => {
  const user = useContext(UserContext);

  return (
    <>
      {" "}
      <div>ComponentCDE</div>
      <h2>UserName : {user.name}</h2>
      <h2>Id : {user.id}</h2>
    </>
  );
};

export default ComponentCDE;
