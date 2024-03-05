import React, { useCallback, useMemo, useState } from "react";

const Demo1 = React.memo(function Demo({ demo, handleChange1 }) {
  console.log("demo 1 runned");
  return (
    <>
      <h2>Demo1 : {demo}</h2>
      <button onClick={handleChange1}>Change Demo1</button>
    </>
  );
});

const Demo2 = React.memo(function Demo({ demo, handleChange2 }) {
  console.log("demo2 runned");
  return (
    <>
      {" "}
      <h2>Demo2 : {demo}</h2>
      <button onClick={handleChange2}>Change Demo2</button>
    </>
  );
});

const Print = React.memo(function Print({ obj }) {
  console.log("print run ");
  return (
    <>
      <h2>Num 1 : {obj.num1}</h2>
    </>
  );
});

const Memo_Demo = () => {
  const [demo1, setDemo1] = useState(0);
  const [demo2, setDemo2] = useState(0);

  const handleChange1 = useCallback(() => {
    setDemo1((demo1) => demo1 + 1);
  }, [demo1]);

  const handleChange2 = useCallback(() => {
    setDemo2((demo2) => demo2 + 1);
  }, [demo2]);

  const obj = useMemo(
    () => ({
      num1: demo1,
    }),
    [demo1]
  );

  return (
    <>
      <Demo1 demo={demo1} handleChange1={handleChange1} />
      <Demo2 demo={demo2} handleChange2={handleChange2} />
      <Print obj={obj} />
    </>
  );
};

export default Memo_Demo;

// import React, { useCallback, useMemo, useState } from "react";

// const Demo = React.memo(function Demo({ demo, handleChange }) {
//   console.log("demo running");
//   console.log(demo);

//   return <button onClick={handleChange}>click</button>;
// });

// const Memo_Demo = () => {
//   const [test, setTest] = useState({ name: "sameer" });

//   console.log("running memo_demo");

//   // function handleChange() {
//   //   setTest((prev) => ({ ...prev }));
//   // }

//   const handleChange = useCallback(() => {
//     setTest((prev) => ({ ...prev }));
//   }, []);

//   const test1 = useMemo(() => {
//     return { ...test, id: "1" };
//   }, [test]);

//   return (
//     <>
//       <Demo demo={test1} handleChange={handleChange} />
//     </>
//   );
// };

// export default Memo_Demo;
