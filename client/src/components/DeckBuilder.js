import React from 'react'
import SearchBar from './SearchBar'

function DeckBuilder(props) {
  const { cardData } = props;

  return (
    <div>
      <SearchBar></SearchBar>
    </div>
  )
}

export default DeckBuilder