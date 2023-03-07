import React, { useState } from 'react'

function SearchBar(props) {

    return (
        <div>
            <form>
                <label for="card-name">Enter card name:</label>
                <input 
                    type="text" 
                    id="card-name" 
                    name="card-name" 
                    value={props.cardName}
                    onChange={e => props.setCardName(e.target.value)}
                    />
                <button type="button" onClick={(e) => props.searchForCard(e)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar