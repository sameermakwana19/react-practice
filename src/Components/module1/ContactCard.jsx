import React from "react";

const ContactCard = ({ name, job, email }) => {
  const style = {
    border: "1px solid white",
    backgroundColor: "gray",
    display: "inline-block",
    margin: "0 15px",
    padding: "15px",
  };
  return (
    <>
      <div style={style}>
        <h1>Name : {name}</h1>
        <h2>Job : {job} </h2>
        <h3>Email : {email}</h3>
      </div>
    </>
  );
};

export default ContactCard;
