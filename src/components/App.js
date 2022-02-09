import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const listingsURL ='http://localhost:6001/listings'

function App() {

  const [ listings, setListings ] = useState( [] )


  useEffect( () => {
    fetch(listingsURL)
      .then( r => r.json() )
      .then( setListings ) 
  }, [] )





  const removeListing = listing => {
    const newListings = listings.filter( ({ id }) => id !== listing.id )
    setListings( newListings )
    
    fetch( listingsURL + `/${listing.id}`, {
      method: 'DELETE'
    })
  }





  const [ search, setSearch ] = useState( '' )


  const justClickedSubmit = theStringToSearchWith => {
    setSearch( theStringToSearchWith )
  }


  const searchedListings = listings.filter(listObj => {
    return listObj.description.toLowerCase().includes( search.toLowerCase() )
  })


  return (
    <div className="app">
      <Header justClickedSubmit={justClickedSubmit} />
      <ListingsContainer removeListing={removeListing} listings={searchedListings} />
    </div>
  );
}

export default App;
