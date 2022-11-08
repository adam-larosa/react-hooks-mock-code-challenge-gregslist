import React from "react";
import Search from "./Search";



function Header({ setSearchString }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchString={ setSearchString } />
    </header>
  );
}

export default Header;
