import { BrowserRouter as Route, Navigate, Outlet}
    from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import CardContainer from './components/CardContainer';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Featured from './components/pages/Featured';

function App() {

  const [cardName, setCardName] = useState('')
  const [cardData, setCardData] = useState({})

  async function searchForCard(e) {
    e.preventDefault()
    const name = encodeURIComponent(cardName);
    const url = `https://api.scryfall.com/cards/named?fuzzy=${name}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCardData(data)
    } catch (error) {
        console.error(error);
    }
}
  return (
    

    <div>
    <Navbar>
      <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<Featured/>} />
        <Route path='/projects' element={<Profile/>} />
        <Navigate to='/'/>
    </Navbar>
    <Outlet />

      <SearchBar cardName={cardName} setCardName={setCardName} searchForCard={searchForCard} />

      <CardContainer cardData={cardData} />
    </div>
    );
}


export default App;
