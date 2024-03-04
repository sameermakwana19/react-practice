import { useId } from "react";

const RulesOfHooks = ({ id }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <>
      <div id={`${appliedId}`}> Demo Text</div>
    </>
  );
};

export default RulesOfHooks;
