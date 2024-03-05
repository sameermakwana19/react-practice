import React from "react";
import VerifiedUserBanner from "./VerifiedUserBanner";

const User = () => {
  const user = {
    name: "John",
    isVerified: true,
  };
  return (
    <>
      <VerifiedUserBanner type="success" user={user}>
        Show the Message if user if verified
      </VerifiedUserBanner>
    </>
  );
};

export default User;
