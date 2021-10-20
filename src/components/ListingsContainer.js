
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => 
          <ListingCard key={listing.id} deleteListing={deleteListing} listing={listing} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
