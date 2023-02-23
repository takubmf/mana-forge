import React from 'react'

function CardContainer(props) {
  return (
    <div>
        <h2>{props.cardData.summary}</h2>
        <p>{JSON.stringify(props.cardData)}</p>
    </div>
  )
}

export default CardContainer