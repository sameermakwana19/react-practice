import React from "react";
import Banner from "./Banner";

const VerifiedUserBanner = ({ type, user, children }) => {
  if (!user || !user.isVerified) {
    return null;
  }

  return (
    <>
      <Banner name="verified" type={type}>
        {children}
      </Banner>
    </>
  );
};

export default VerifiedUserBanner;
