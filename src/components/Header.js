import React from "react";
import Search from "./Search";

const SortActivator = ({ sort:isSelected, userWantsSort }) => {
  return (
    <div style={{margin: "10px"}}>

      <label htmlFor="sort-checkbox" >Sort by name?</label>
      <input id="sort-checkbox" onChange={() => userWantsSort()} 
        type="checkbox" checked={isSelected} style={{margin: "10px"}}/>

    </div>
  )
}



function Header({ sendUserInputToApp, sort, userWantsSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <SortActivator sort={sort} userWantsSort={userWantsSort} />
      <Search sendUserInputToApp={sendUserInputToApp} />
    </header>
  );
}

export default Header;
