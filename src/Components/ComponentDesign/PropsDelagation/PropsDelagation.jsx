import React from "react";
import TextInput from "./TextInput";

const PropsDelagation = () => {
  return (
    <>
      <h2>PropsDelagation</h2>
      <hr />
      <form action="">
        <TextInput
          label={"Email"}
          type={"email"}
          required={true}
          maxLength={9}
        />
        <br />
        <TextInput
          label={"password"}
          type={"password"}
          required
          minLength={4}
          maxLength={8}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default PropsDelagation;
