import React from "react";
import Search from "./Search";



function Header({ justClickedSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search justClickedSubmit={justClickedSubmit} />
    </header>
  );
}

export default Header;
