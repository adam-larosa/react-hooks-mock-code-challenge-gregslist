import { useState } from 'react'
import { url, jsonify } from '../tools/fetchData'


export default function NewListing({ addNewListingToState }) {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')

    const makeNewListing = e => {
        e.preventDefault()

        const method = 'POST'
        const headers = {"Content-Type": "application/json"}
        const body = JSON.stringify({ description, image, location })

        const dataToTransmit = {method, headers, body }

        fetch(url, dataToTransmit).then( jsonify ).then(newListing => {
            addNewListingToState(newListing)    //         ^
        })                                      //         | 
    }                                           // this is the response
                                                // from our back end, i.e. the
    return (                                    // json-server
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