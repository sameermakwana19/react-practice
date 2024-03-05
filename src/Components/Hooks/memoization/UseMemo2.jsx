import React, { useMemo, useState } from "react";

const PrintInfo = React.memo(function PrintInfo({ info }) {
  console.log("running printinfo");
  return (
    <>
      <h2>Name : {info.name}</h2>
      <h3>Role : {info.role}</h3>
    </>
  );
});

const UseMemo2 = () => {
  const [name, setName] = useState("john");
  const [random, setRandom] = useState(1);
  console.log("running usememo2");

  // const info = {
  //   name,
  //   role: "guest",
  // };

  const info = useMemo(() => {
    return {
      name,
      role: "guest",
    };
  }, [name]);

  return (
    <>
      <button
        onClick={() => {
          setRandom((prev) => prev + 1);
        }}
      >
        Change random
      </button>

      <button
        onClick={() => {
          setName((prev) => prev + "josh");
        }}
      >
        Change the user Name
      </button>
      <PrintInfo info={info} />
    </>
  );
};

export default UseMemo2;
