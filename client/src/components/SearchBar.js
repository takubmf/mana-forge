import React from 'react';
import axios from 'axios';
import CardContainer from './CardContainer';
import DeckBuilder from './DeckBuilder';

function SearchBar() {
  const [cardName, setcardName] = React.useState('');
  const [cardData, setcardData] = React.useState([]);
  const [cardDisplay, setcardDisplay] = React.useState('');

  const handleInputChange = event => {
    setcardName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const name = encodeURIComponent(cardName);
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${name}`);
      console.log(response.data);
      setcardData(response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const card = response.data.data[0];
        setcardDisplay(card.image_uris.small);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" value={cardName} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <CardContainer cardDisplay={cardDisplay} />
      
    </div>
  );
}

export default SearchBar;