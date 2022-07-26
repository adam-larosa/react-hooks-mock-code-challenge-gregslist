import React from "react";
import Search from "./Search";



function Header({ submitSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search submitSearch={ submitSearch } />
    </header>
  );
}

export default Header;
