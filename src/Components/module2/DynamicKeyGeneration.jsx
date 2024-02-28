import React, { useState } from "react";
import { COUNTRIES } from "./data";

const DynamicKeyGeneration = () => {
  const countries = Object.values(COUNTRIES);

  const [num, setNum] = useState(0);
  const [data, setData] = useState([]);

  function getData() {
    let newItem = {
      name: countries[num],
      id: crypto.randomUUID(),
    };
    const newData = [...data, newItem];
    setNum(num + 1);
    setData(newData);
    // return countries[num];
  }

  console.log(data);
  return (
    <>
      <button onClick={() => getData()}>Get Next Country</button>
      {data.map(({ id, name }) => (
        <h2 key={id}>{name}</h2>
      ))}
    </>
  );
};

export default DynamicKeyGeneration;
