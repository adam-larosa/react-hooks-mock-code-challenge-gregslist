import React, { useState } from "react";

function Search({ submitSearch }) {
  
  const [ searchString, setSearchString ] = useState( '' )
  
  function handleSubmit(e) {
    e.preventDefault();
    submitSearch( searchString )
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
