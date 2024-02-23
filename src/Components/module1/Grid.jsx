import React from "react";

const Grid = ({ rows = 2, cols = 2 }) => {
  const rowsArr = new Array(rows);
  rowsArr.fill(0);
  let colsArr = new Array(cols);
  colsArr.fill(0);
  console.log(rowsArr, rows);
  console.log(colsArr, cols);

  return (
    <>
      {rowsArr.map((item) => (
        <div className="row" style={{ background: "goldenrod" }}>
          {colsArr.map((item) => (
            <div
              style={{
                display: "inline-block",
                padding: "10px",
                margin: "5px",
                background: "white",
                color: "black",
              }}
            >
              cols
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Grid;
