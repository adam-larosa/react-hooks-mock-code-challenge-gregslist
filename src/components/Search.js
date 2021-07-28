import React, { useState } from "react";

function Search({ sendUserInputToApp }) {
  const [userInput, setUserInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    sendUserInputToApp(userInput)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
