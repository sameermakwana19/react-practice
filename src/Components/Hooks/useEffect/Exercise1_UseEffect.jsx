import React, { useEffect, useState } from "react";

const Exercise1_UseEffect = () => {
  const [name, setName] = useState("john");
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("123456");

  // alternate way  ?
  //  const  storedValue = JSON.parse(localStorage.getItem("isDarkMode")) ?? false;
  //  const [isDarkMode, setIsDarkMode] = useState(storedValue);
  // PROBLEM : above code will run on every render

  // TODO: Pass the function inside usestate , it is only called on the intial render
  const [isDarkMode, setIsDarkMode] = useState(() => {
    console.log(JSON.parse(localStorage.getItem("isDarkMode")));
    const storedValue = JSON.parse(localStorage.getItem("isDarkMode")) ?? false;
    return storedValue;
  });

  // writing in UseEffect will call it after rendering -- ERROR only in strict mode --> null ->setstorage->null , JSON.parse(null)-->error
  // const [isDarkMode, setIsDarkMode] = useState();
  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem("isDarkMode")));
  //   const storedValue = JSON.parse(localStorage.getItem("isDarkMode")) ?? false;
  //   console.log({ storedValue });
  //   setIsDarkMode(storedValue);
  // }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    console.log({ email });
  }, [email]);

  useEffect(() => {
    console.log({ name });
  }, [name]);
  console.log("rendering the component instance");

  return (
    <>
      <div
        style={{
          width: "1000px",
          height: "1000px",
          background: `${!isDarkMode ? "white" : "black"}`,
          color: `${!isDarkMode ? "black" : "white"}`,
        }}
      >
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "off" : "on"} Dark Mode
        </button>
        <br />
        <label htmlFor="name"> Name :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email"> Email :</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password"> Password :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Exercise1_UseEffect;
