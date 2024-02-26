import React, { useState } from "react";
import Button from "../module1/Button";

const PropsVSState = () => {
  const [isAgree, setIsAgree] = useState(false);
  return (
    <>
      <h2>Please agree with the terms and conditions .</h2>
      <form>
        <input
          type="checkbox"
          value={isAgree}
          onChange={(e) => setIsAgree(!isAgree)}
          id="check"
        />
        <label htmlFor="check">Do you agree with terms ?</label>
        <br />
        <Button status="cancel">Cancel</Button>
        <Button isEnabled={isAgree} status="confirm">
          Confirm
        </Button>
        {/* <button disabled={!isAgree}>dis</button>   */}
      </form>
    </>
  );
};

export default PropsVSState;
