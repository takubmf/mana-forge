import React from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import { useState } from 'react'



function DeckBuilder() {
  return (
    <div>
        <SearchBar cardName={cardName} setCardName={setCardName} searchForCard={searchForCard} />
        <CardContainer cardData={cardData} />
    </div>
  )
}

export default DeckBuilder