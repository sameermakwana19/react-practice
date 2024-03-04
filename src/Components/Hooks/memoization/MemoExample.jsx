import React, { useState } from "react";
import Grid from "../../module1/Grid";
import useMousePos from "../Custom_Hook/useMousePos";

const MemoExample = () => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const mousePos = useMousePos();
  return (
    <>
      {mousePos.x}/{mousePos.y}
      <Grid rows={rows} cols={cols} />
      <button onClick={() => setRows(rows + 1)}>Increase Rows</button>
      <button onClick={() => setRows(rows - 1)}>Decrease Rows</button>
      <button onClick={() => setCols(cols + 1)}>Increase Cols</button>
      <button onClick={() => setCols(cols - 1)}>Decrease Cols</button>
    </>
  );
};

export default MemoExample;
