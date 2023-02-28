import { useState } from "react";

function ListingCard({ id, image, description, location, removeListingFromState }) {

  const [ isLiked, setIsLiked ] = useState( false )
  const toggleLike = () => setIsLiked( isLiked => !isLiked )

  const handleDelete = () => {
    fetch( `http://localhost:6001/listings/${id}`, { method: 'DELETE' } )
    removeListingFromState( id )
  }
    
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        { isLiked ? (
          <button onClick={ toggleLike } className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={ toggleLike } className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{ description }</strong><span> · { location }</span>
        <button onClick={ handleDelete } className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
