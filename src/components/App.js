import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

  const [ listings, setListings ] = useState( [] )

  const removeListingFromState = doomedListingId => {
    const filteredArray = listings.filter( listingObj => {
      return listingObj.id !== doomedListingId
    } )
    setListings( filteredArray )
  }

  useEffect( () => {
    fetch( 'http://localhost:6001/listings' )
      .then( r => r.json() )
      .then( setListings )
  }, [] )




  const [ searchString, setSearchString ] = useState( '' )

  const toggleSearch = aNewString => {
    setSearchString( aNewString.toLowerCase() )
  }

  const searchedListings = listings.filter( listingObj => {
    if( listingObj.description.toLowerCase().includes( searchString ) ) {
      return true
    }
  } )




  return (
    <div className="app">
      <Header toggleSearch={ toggleSearch } />
      <ListingsContainer 
        removeListingFromState={ removeListingFromState } 
        listings={ searchedListings } 
      />
    </div>
  );
}

export default App;
