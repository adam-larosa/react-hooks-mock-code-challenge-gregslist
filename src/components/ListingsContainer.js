import React from "react";
import ListingCard from "./ListingCard";

const renderListings = (l, dl) => 
  <ListingCard key={l.id} listing={l} deleteListing={dl} />

function ListingsContainer({ listings, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        { listings.map((listing) => renderListings(listing, deleteListing) )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
