import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => setLiked(!liked)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={toggleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => deleteListing(listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
