import React from "react";
import Search from "./Search";

const SortActivator = ({ userWantsSort }) => {
  return (
    <div style={{margin: "10px"}}>
      Sort by name? <input onChange={() => userWantsSort()}type="checkbox"/>
    </div>
  )
}

function Header({ sendUserInputToApp, userWantsSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <SortActivator userWantsSort={userWantsSort} />
      <Search sendUserInputToApp={sendUserInputToApp} />
    </header>
  );
}

export default Header;
