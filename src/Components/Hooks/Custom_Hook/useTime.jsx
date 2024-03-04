import React from "react";
import { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState(new Date()); // new Date()

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return { time };
};

export default useTime;
