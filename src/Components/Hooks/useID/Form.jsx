import { useId } from "react";

const Form = () => {
  const id = useId();

  console.log({ id });
  const inputId = `${id}-text`;

  return (
    <>
      <form>
        {/* even on clicking the second instance's label , first instance label is focused  */}
        {/* <label htmlFor="text"> Username</label>
        <input type="text" id="text" /> */}

        <label htmlFor={inputId}> Username</label>
        <input type="text" id={inputId} />
      </form>
    </>
  );
};

export default Form;
