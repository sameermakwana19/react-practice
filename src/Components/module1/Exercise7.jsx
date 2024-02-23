import React from "react";

/*Here's the raw HTML:

<form>
<label for="search-input">Search:</label>
<input id="search-input">
<button aria-label="Submit" class="submit-btn">
<img
alt=""
src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
>
</button>
</form>
*/

const Exercise7 = () => {
  // Convert the Raw HTML into JSX
  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input id="search-input" />
        <button aria-label="Submit" className="submit-btn">
          <img
            alt=""
            src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
          />
        </button>
      </form>
    </>
  );
};

export default Exercise7;
