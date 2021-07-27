import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewListing from './NewListing'
import ListingsContainer from "./ListingsContainer";
const jsonify = resp => resp.json()
const url = "http://localhost:3000/listings"


function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  useEffect(() => {
    fetch(url).then(jsonify).then(listingsData => {
      

      setListings(listingsData)
    })
  }, [])


  const deleteListing = id => {
    const whereToSendRequest = `${url}/${id}`
    const metaDataAndStuff = {method: "DELETE"}
  
    fetch(whereToSendRequest, metaDataAndStuff)
    // begin ALL FRONT END STUFF

    const index = listings.findIndex(listing => listing.id === id )
    const newListings = [...listings]
    newListings.splice(index, 1)
  
    setListings(newListings)

    // end FRONT
  }

  const getUserInputFromSearch = input => setSearch(input)
  const filteredResults = () => {
    if (search.length > 0) {
      return listings.filter(listing => 
        listing.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return listings
    }
  }

  const userWantsSort = () => setSort(!sort)
  const sortedListings = () => {
    if (sort) {
      return [...filteredResults()].sort((a, b) => 
        a.location < b.location ? -1 : a.location > b.location ? 1 : 0)
    }
    return filteredResults()
  }

  const addNewListingToState = newListing => {
    console.log(newListing)
    setListings(prevListings => {
      const newListings = [...prevListings]

      newListings.unshift(newListing)

      return newListings
    })
  }


  return (
    <div className="app">
      <Header userWantsSort={userWantsSort} sendUserInputToApp={getUserInputFromSearch} />
      <NewListing addNewListingToState={addNewListingToState} />
      <ListingsContainer listings={sortedListings()} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
