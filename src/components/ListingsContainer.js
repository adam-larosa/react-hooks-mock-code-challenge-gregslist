
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListingFromState }) {

  const renderListingCard = listingObj => {
    return <ListingCard key={ listingObj.id } 
      { ...listingObj } 
      removeListingFromState={ removeListingFromState }
    />
  }

  const listingCardComponents = listings.map( renderListingCard )
 
  return (
    <main>
      <ul className="cards">
        { listingCardComponents }
      </ul>
    </main>
  );
}

export default ListingsContainer;
