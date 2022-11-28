import React from "react";

function Search({ handleSearch }) {
  return (
    <form onSubmit={() => handleSearch(event)}>
      <fieldset>
        <input type="text" id="query" />
        <button type="submit">Search</button>
      </fieldset>
    </form>
  );
}

export default Search;
