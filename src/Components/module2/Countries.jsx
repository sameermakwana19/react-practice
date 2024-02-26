import React, { useState } from "react";
import { COUNTRIES } from "./data";

const Countries = () => {
  const [country, setCountry] = useState();
  const countries = Object.entries(COUNTRIES);
  // console.log(countries.length);

  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          required={true}
        >
          <option value="">- SELECT YOUR COUNTRY -</option>
          <optgroup label="Countries">
            {countries.map(([id, value]) => (
              <option value={id} key={id}>
                {value}
              </option>
            ))}
          </optgroup>
        </select>
      </form>
      <h2>{country && `Country : ${COUNTRIES[country]} (${country})`}</h2>
    </>
  );
};

export default Countries;
