import { useState } from 'react'
const url = "http://localhost:3000/listings"


export default function NewListing({ addNewListingToState }) {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')

    const makeNewListing = e => {
        e.preventDefault()
        //do our fetch

        const method = 'POST'
        const headers = {"Content-Type": "application/json"}
        const body = JSON.stringify({ description, image, location })

        const dataToTransmit = {method, headers,body }

        fetch(url, dataToTransmit).then(r => r.json()).then(newListing => {
            addNewListingToState(newListing)
        })


    }

    return (
        <div style={{margin: "10px"}}>
            <form onSubmit={makeNewListing} >
                <label htmlFor="description">
                    Description:
                </label>
                <input onChange={(e) => setDescription(e.target.value)} 
                    id="description" name="description"/>

                <label htmlFor="image">
                    Image url:
                </label>
                <input onChange={(e) => setImage(e.target.value)} id="image" name="image" />

                <label htmlFor="location">
                    Location:
                </label>
                <input onChange={(e) => setLocation(e.target.value)} id="location" name="location" />
                
                <input style={{margin: '10px'}} type="submit" />
            </form>
        </div>
    )
}