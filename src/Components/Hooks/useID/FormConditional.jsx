import { useId, useState } from "react";
import Form from "./Form.jsx";

const FormConditional = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isShown && <Form />}
      <button onClick={() => setIsShown(!isShown)}>
        Click to toggle the second form
      </button>
    </>
  );
};

export default FormConditional;
