import React, { useEffect, useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    if (isChecked) {
      return;
    }

    const id = setTimeout(() => {
      console.log("setting the time out");
      setIsChecked(true);
    }, 500);
    return () => {
      console.log("clearing the time out");
      clearTimeout(id);
    };
  }, [isChecked]);

  return (
    <>
      <div>CheckBox</div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      {/* <button onClick={() => setIsChecked(!isChecked)}>Check the box</button> */}
    </>
  );
};

export default CheckBox;
