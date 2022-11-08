import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const URL = 'http://localhost:6001/listings'

function App() {

	const [ listings, setListings ] = useState( [] )

	const [ searchString, setSearchString ] = useState( '' )


	const removeListing = doomedListingObj => {
		const newListings = listings.filter( listObj => {
			return doomedListingObj.id !== listObj.id
		} )
		setListings( newListings )
		fetch( `${URL}/${doomedListingObj.id}`, { method: 'DELETE' } )
	}

	useEffect( () => {
		fetch( URL )
			.then( r => r.json() )
			.then( listingsArray => setListings( listingsArray ) )
	}, [] )

	const searchedListings = listings.filter( listObj => {
		return listObj.description.toLowerCase().includes( searchString.toLowerCase() )
	} )
	
	return (
		<div className="app">
			<Header setSearchString={ setSearchString } />
			<ListingsContainer 
				removeListing={ removeListing } 
				listings={ searchedListings } 
			/>
		</div>
	);
}

export default App;
