import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {

	const [ star, setStar ] = useState( false )

	const handleStar = () => {
		setStar( !star )
	} 

	const handleTrash = () => {
		removeListing( listing ) //<- passing "listing" up to "doomedListingObj"
	}

	return (
		<li className="card">
			<div className="image">
				<span className="price">$0</span>
				<img src={ listing.image } alt={ listing.description } />
			</div>
			<div className="details">
				{star ? (
					<button onClick={ handleStar } className="emoji-button favorite active">★</button>
				) : (
					<button onClick={ handleStar } className="emoji-button favorite">☆</button>
				)}
				<strong>{ listing.description }</strong>
				<span> · { listing.location }</span>
				<button onClick={ handleTrash } className="emoji-button delete">
					🗑
				</button>
			</div>
		</li>
	);
}

export default ListingCard;
