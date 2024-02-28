import React, { useState } from "react";
import LS_SearchForm from "./LS_SearchForm";
import LS_SearchResult from "./LS_SearchResult";

const LiftingState = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h2>Food Store </h2>
      <h3>Search for the require item</h3>
      <LS_SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LS_SearchResult search={searchTerm} />
    </>
  );
};

export default LiftingState;
