import React, { useState } from "react";

const Counter1 = () => {
  const [strength, setStrength] = useState(6);
  const [dexterity, setDexterity] = useState(8);
  const [intelligence, setIntelligence] = useState(10);
  console.log(strength, dexterity, intelligence);

  const levelUp = () => {
    // setStrength(strength + 1);
    // setDexterity(dexterity + 2);
    // setIntell(intelligence + 3);

    // alert("str , dex ,intelligence : " + strength + dexterity + intelligence); // will get the old value; as state updating is the asynchronous process

    // Another way
    const newStr = strength + 1;
    setStrength(newStr);
    const newDex = dexterity + 1;
    setDexterity(newDex);
    const newInt = intelligence + 1;
    setIntelligence(newInt);

    alert("str , dex ,intelligence : " + newStr + newDex + newInt);

    console.log(strength, dexterity, intelligence);
  };

  return (
    <>
      <h2>{`str : ${strength} dex: ${dexterity} intell : ${intelligence}`}</h2>
      <button onClick={levelUp}>levelUp</button>
    </>
  );
};

export default Counter1;
