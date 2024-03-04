import React, { useState } from "react";

const ColorPicker = () => {
  const initial = ["#ffceae", "#ffbced", "#ffbced", "#ffbced", "#ffbced"];
  const [allow, setAllow] = useState(true);
  const [colors, setColors] = useState(initial);
  // const colorText = colors.join(", ");

  // remembering the previous value.
  const [visibleColorsNumber, setVisibleColorsNumber] = useState(2);
  const visibleColor = colors.slice(0, visibleColorsNumber);
  const colorText = visibleColor.join(", ");

  function addColor(e) {
    e.preventDefault();
    // if (colors.length >= 5) {
    //   setAllow(false);
    //   return;
    // }

    if (visibleColorsNumber === 5) {
      return;
    }
    // setAllow(true);
    // const newArr = [...colors];
    // newArr.push("#ff9922");
    // setColors(newArr);

    setVisibleColorsNumber(visibleColorsNumber + 1);
  }

  function removeColor(e) {
    e.preventDefault();
    // if (colors.length <= 2) {
    //   setAllow(false);
    //   return;
    // }

    if (visibleColorsNumber === 2) {
      return;
    }

    // setAllow(true);
    // const newArr = [...colors];
    // newArr.length = newArr.length - 1;
    // setColors(newArr);

    setVisibleColorsNumber(visibleColorsNumber - 1);
  }

  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          background: `linear-gradient(${colorText})`,
        }}
      ></div>
      <form action="">
        {/* {colors.map((item, index) => { */}
        {/* { */}
        {visibleColor.map((item, index) => {
          // console.log(item);
          // }
          return (
            <input
              key={`color-${index}`}
              type="color"
              value={item}
              onChange={(e) => {
                const newArr = [...colors];
                newArr[index] = e.target.value;
                setColors(newArr);
              }}
            />
          );
        })}
        <br />
        <button onClick={addColor}>Add new Color</button>
        <br />
        <button onClick={removeColor}>Remove Color</button>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setColors(initial);
          }}
        >
          Set to initial
        </button>
      </form>
      {!allow && (
        <h2>
          Sorry can't perform the{" "}
          {colors.length >= 5 ? "add operation" : "remove operation"}
        </h2>
      )}
    </>
  );
};

export default ColorPicker;
