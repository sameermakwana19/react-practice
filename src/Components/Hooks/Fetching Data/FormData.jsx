import React, { useId, useState } from "react";
import axios from "axios";

const ENDPOINT =
  // "https://jor-test-api.vercel.app/api/contact";
  "https://jor-test-api.vercel.app/api/contact?simulatedError=true";

const FormData = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const id = useId();

  let msg = {
    idle: "Submit the form",
    loading: "submitting the form",
    success: "data submitted succesfully",
    error: "Form submission failed ! try again",
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("loading");

    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email,
        message,
      }),
    });

    console.log(res);
    const data = await res.json();

    if (data.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      console.log(data);
    }

    // const res = await axios.post(ENDPOINT, JSON.stringify({ email, message }));
    // console.log(res.data);
  }

  return (
    <>
      {msg[status]}
      <form onSubmit={handleSubmit}>
        <label htmlFor={`${id}-email`}>EMAIL : </label>
        <br />
        <input
          disabled={status === "loading"}
          id={`${id}-email`}
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        <label htmlFor={`${id}-message`}>MESSAGE : </label>
        <br />
        <input
          disabled={status === "loading"}
          id={`${id}-message`}
          value={message}
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
        <br />
        <button disabled={status === "loading"}>Submit</button>
      </form>
    </>
  );
};

export default FormData;
