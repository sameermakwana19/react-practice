import React, { useState } from "react";

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

const Exercise1_fetchingData = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const url = `${ENDPOINT}?searchTerm=${input}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.ok) {
      setResults(data.results);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      {status}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          required
        />
        <button>Search</button>
      </form>

      {status === "idle" && <h2>Welcome to book store</h2>}
      {status === "loading" && <h2>Searching ...</h2>}
      {status === "error" && <Error />}
      {status === "success" && <SearchResults results={results} />}
    </>
  );
};

function SearchResults({ results }) {
  if (results.length === 0) {
    return <h2>No books Found</h2>;
  }

  return (
    <>
      {results.map((item) => (
        <h2>{JSON.stringify(item)}</h2>
      ))}
    </>
  );
}

function Error() {
  return <h2>ERROR , Please Try after some Time</h2>;
}

export default Exercise1_fetchingData;
