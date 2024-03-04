import React, { useEffect, useRef, useState } from "react";
import useTime from "./useTime";

const Clock = () => {
  const { time } = useTime();

  return (
    <>
      <h2>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </h2>
    </>
  );
};

export default Clock;
