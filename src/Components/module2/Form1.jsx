import React, { useState } from "react";

const Form1 = () => {
  const [search, setSearch] = useState("cats");

  return (
    <>
      {/* in HTML value set the initial value for input and allow us to change but in react value works little bit differently , in react - value attr lock the value to string and prevent us from changing   */}

      {/* by set the value equal to state , it lock the input field value to state value ,which prevents us from change the value in the input field (if no onChange listener is add to change the state value) */}

      {/* one way data binding { onChange ={()=>  setState(e.target.value)} } -- only adding onchange event listener on input , which will change the value of the state but if doesn't lock the value of the input then it won't reflect the new state value in the input field */}

      {/* Two way data binding( value = {state} , onChange ={()=>  setState(e.target.value)}) -- locking the value of input to the state value , it prevents from mismatching the statevalue and input value. */}

      {/* value --> onChange(here the can see(log) the value we enter in the input field) --> Again locking the value to state variable  */}

      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <h2>Value in the State : {search}</h2>
      <button
        onClick={() => {
          setSearch(Math.random());
        }}
      >
        Generate the random number
      </button>
    </>
  );
};

export default Form1;
