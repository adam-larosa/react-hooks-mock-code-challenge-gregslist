
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {


  const listingComponents = listings.map( l => 
    <ListingCard removeListing={removeListing} key={ l.id } listing={ l } />)

  return (
    <main>
      <ul className="cards">
        
        {listingComponents}

      </ul>
    </main>
  );
}

export default ListingsContainer;
