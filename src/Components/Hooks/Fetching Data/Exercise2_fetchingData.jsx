import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ENDPOINT =
  "https://jor-test-api.vercel.app/api/get-current-user?simulatedError=true";

async function fetcher(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();
  if (!data.ok) {
    throw data;
  }

  return data;
}

const Exercise2_fetchingData = () => {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);

  console.log(data, error, isLoading);

  return (
    <>
      {error && <p>Something went wrong </p>}
      {isLoading && <p>Fetching data ....</p>}
      {data?.user && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default Exercise2_fetchingData;
