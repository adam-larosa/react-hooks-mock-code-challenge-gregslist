import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  

  const deleteListing = doomedListing => {

    const newListings = listings.filter(listing => listing.id !== doomedListing.id)

    setListings(newListings)

    fetch(`http://localhost:6001/listings/${doomedListing.id}`, {
      method: 'DELETE'
    })
    
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings').then(r => r.json())
      .then( setListings )
  },  [])


  const formInput = userText => {
    setSearch(userText)
  }

  const filteredListings = () => {
    if (search.length > 0) {
      return listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return listings
    }
  }

  return (
    <div className="app">
      <Header formInput={formInput} />
      <ListingsContainer listings={filteredListings()} deleteListing={deleteListing}  />
    </div>
  );
}

export default App;
