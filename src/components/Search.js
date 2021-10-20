import React, { useState } from "react";

function Search({ formInput }) {

  const [form, setForm] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    formInput(form);
  }

  const handleChange = e => setForm(e.target.value)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
