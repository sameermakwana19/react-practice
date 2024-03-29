import React from "react";

const Grid = ({ rows = 2, cols = 2 }) => {
  if (rows < 1 || cols < 1) {
    rows = 1;
    cols = 1;
  }

  const rowsArr = new Array(rows);
  rowsArr.fill(0);
  const colsArr = new Array(cols);
  colsArr.fill(0);
  // console.log(rowsArr, rows);
  // console.log(colsArr, cols);

  console.log("grid component rendered");

  return (
    <>
      {rowsArr.map((_, index) => (
        <div className="row" key={index} style={{ background: "goldenrod" }}>
          {colsArr.map((item, index) => (
            <div
              key={index}
              style={{
                display: "inline-block",
                padding: "10px",
                margin: "5px",
                background: "white",
                color: "black",
              }}
            >
              cols{` ${index + 1}`}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

// export default Grid;
export default React.memo(Grid);
