import React, { useState } from "react";

const AsychStateBeh = () => {
  const [user, setUser] = useState({ name: "sam" });
  const [status, setStatus] = useState("ready");
  const [confMsg, setConfMsg] = useState();

  console.log(user, status, confMsg);

  if (!user) {
    return <p>Please login to continue.</p>;
  }

  return (
    <>
      <button
        onClick={() => {
          setUser(null); //will take of not of it , update the state in the next render , and continue working in the current render
          setStatus("initial");
          setConfMsg("Log out successfully");
          console.log(user, status, confMsg);
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default AsychStateBeh;
