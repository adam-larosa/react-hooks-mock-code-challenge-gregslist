import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewListing from './NewListing'
import ListingsContainer from "./ListingsContainer";
import { url, jsonify } from '../tools/fetchData'


function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const putListingsInState = listingsData => setListings(listingsData)

  useEffect(() => {
    fetch(url).then( jsonify ).then( putListingsInState )
  }, [])

  const addNewListingToState = newListing => {
/*     The fetch that requests a new listing be created on the back end is 
       located in the NewListing component.  This function is sent there and
       supplies the newListing parameter with a value                         */
    setListings(prevListings => {
      const newListings = [...prevListings]
      newListings.unshift(newListing)
      return newListings // changes state
    })
  }

  const deleteListing = id => {
    const whereToSendRequest = `${url}/${id}`
    const whatToSend = {method: "DELETE"}
  
    fetch(whereToSendRequest, whatToSend) // back end stuff

    // begin ALL FRONT END STUFF
    const index = listings.findIndex(listing => listing.id === id )
    const newListings = [...listings]
    newListings.splice(index, 1)
    setListings(newListings) // changes state
    // end FRONT
  }

  const getUserInputFromSearch = input => setSearch(input) // changes state
  const filteredResults = () => { // looks at state
    if (search.length > 0) { 
      return listings.filter(listing => 
        listing.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return listings
    }
  }

  const userWantsSort = () => setSort(!sort) // changes state
  const sortedListings = () => { // looks at state
    if (sort) { 
      // second version of sort's callback logic below
      return [...filteredResults()].sort((a, b) => {
        if (a.location < b.location) {
          return -1
        } else if (a.location > b.location) {
          return 1
        } else {
          return 0
        }// a.location < b.location ? -1 : a.location > b.location ? 1 : 0)
      }) 
    }
    return filteredResults()
  }


  return (
    <div className="app">
      <Header sort={sort} userWantsSort={userWantsSort} 
        sendUserInputToApp={getUserInputFromSearch} />

      <NewListing addNewListingToState={addNewListingToState} />

      <ListingsContainer listings={sortedListings()} 
        deleteListing={deleteListing} />
    </div>
  );
}

export default App;
