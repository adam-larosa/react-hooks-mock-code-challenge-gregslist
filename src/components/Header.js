import React from "react";
import Search from "./Search";



function Header({ formInput }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search formInput={formInput} />
    </header>
  );
}

export default Header;
