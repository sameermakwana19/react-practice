import React from "react";
import useSWR from "swr";

const ENDPOINT = "https://jor-test-api.vercel.app/api/get-temperature";

const fetcher = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = res.json();

  return data;
};

const SWR_DEMO = () => {
  const { data, error } = useSWR(ENDPOINT, fetcher);

  console.log(data, error);

  return (
    <>
      <h2>current Temperature: {data?.temperature || "Error"} °C</h2>
    </>
  );
};

export default SWR_DEMO;
