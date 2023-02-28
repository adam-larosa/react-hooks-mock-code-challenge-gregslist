import React from "react";
import Search from "./Search";



function Header({ toggleSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search toggleSearch={ toggleSearch }/>
    </header>
  );
}

export default Header;
