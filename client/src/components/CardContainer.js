import React from 'react'

function CardContainer(props) {
  const { cardDisplay } = props;
  console.log(cardDisplay);

  return (
    <div>
      {cardDisplay ? (
        <img src={cardDisplay} alt="Magic: The Gathering card" />
      ) : (
        <p>No card selected.</p>
      )}
    </div>
  );
}

export default CardContainer