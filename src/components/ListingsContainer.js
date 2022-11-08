
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {

	const listingComponents = listings.map( listObj => {
		return <ListingCard 
			removeListing={ removeListing } 
			key={ listObj.id } 
			listing={ listObj } 
		/>
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
