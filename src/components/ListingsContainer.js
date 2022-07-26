
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {

  
  const listingComponents = listings.map( listing => {
    return <ListingCard removeListing={ removeListing } key={listing.id} 
      listing={ listing } />
  } )
  
  return (
    <main>
      <ul className="cards">
        { listingComponents }
      </ul>
    </main>
  );
}

export default ListingsContainer;
