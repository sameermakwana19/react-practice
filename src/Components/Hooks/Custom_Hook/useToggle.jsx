import React, { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue((prev) => !prev);
  }

  return [value, toggleValue];
};

export default useToggle;
