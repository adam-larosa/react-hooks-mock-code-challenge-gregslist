import { useState } from "react";

function Search({ toggleSearch }) {

  const [ searchInputValue, setSearchInputValue ] = useState( '' )


  function handleSubmit(e) {
    e.preventDefault();
    toggleSearch( searchInputValue )
  }

  return (
    <form className="searchbar" onSubmit={ handleSubmit }>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ searchInputValue }
        onChange={(e) => setSearchInputValue(e.target.value) }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
