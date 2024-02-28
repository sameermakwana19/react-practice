import React from "react";

const LS_SearchForm = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.trim())}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default LS_SearchForm;
