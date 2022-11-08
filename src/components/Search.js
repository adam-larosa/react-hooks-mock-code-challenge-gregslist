import React, { useState } from "react";

function Search({ setSearchString }) {

	const [ text, setText ] = useState( '' )

	function handleSubmit(e) {
		e.preventDefault();
		setSearchString( text );
	}

	const handleText = e => {
		setText( e.target.value )
	}

	console.log( 'current value of form input:', text )
	return (
		<form className="searchbar" onSubmit={ handleSubmit }>
			<input
				type="text"
				id="search"
				placeholder="search free stuff"
				value={ text }
				onChange={ handleText }
			/>
			<button type="submit">🔍</button>
		</form>
	);
}

export default Search;
