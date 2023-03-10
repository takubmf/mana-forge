import { BrowserRouter as Route, Navigate, Outlet}
    from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Featured from './pages/Featured';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Navigate to='/'/>
    </Navbar>
    <Outlet />
    <Home></Home>

      <SearchBar cardName={cardName} setCardName={setCardName} searchForCard={searchForCard} />

      <CardContainer cardData={cardData} />
    </div>
    );
}


export default App;
