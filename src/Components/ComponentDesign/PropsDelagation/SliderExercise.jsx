import React, { useCallback, useId, useState } from "react";

function Slider({ id, label, ...delegated }) {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} type="range" {...delegated} />
    </>
  );
}

const SliderExercise = () => {
  const [volume, setVolume] = useState(5);
  const onChange = useCallback((e) => {
    console.log("running onChange");
    setVolume(e.target.value);
  }, []);

  return (
    <>
      <div>SliderExercise</div>
      <Slider
        label={"Volume"}
        onChange={onChange}
        value={volume}
        min={0}
        max={10}
        step={0.1}
      />
    </>
  );
};

export default SliderExercise;
