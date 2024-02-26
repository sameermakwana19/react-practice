import React, { useState } from "react";

const FormControls = () => {
  const [selectInput, setSelectInput] = useState("");
  const [valueRadio, setValueRadio] = useState("no");

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          selectInput &&
            valueRadio === "yes" &&
            alert("form submitted succesfully");
        }}
      >
        <select
          value={selectInput}
          required={true}
          onChange={(e) => setSelectInput(e.target.value)}
        >
          <option value="">- Select the color -</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
        <hr />
        <h3>Are you Human ? </h3>
        <input
          type="radio"
          name="demo"
          id="yes"
          value="yes"
          checked={valueRadio === "yes"}
          onChange={(e) => setValueRadio(e.target.value)}
        />
        <label htmlFor="yes">YES</label>
        <input
          type="radio"
          id="no"
          name="demo"
          value="no"
          checked={valueRadio === "no"}
          onChange={(e) => setValueRadio(e.target.value)}
        />
        <label htmlFor="no">NO</label>
        <br />

        <button>Submit</button>
      </form>
      <h2>
        {selectInput
          ? `Selected Color : ${selectInput}`
          : "please select the color"}
        <br />
        {valueRadio === "yes"
          ? `Thank you for verifying`
          : "please confirm you are human."}
      </h2>
    </>
  );
};

export default FormControls;
