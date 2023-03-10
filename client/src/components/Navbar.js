import React from 'react';
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const styles ={
  nav:{
   backgroundColor: 'green',
   textDecorationColor: 'white',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap : '2rem',
   padding: '0 1rem',
  }
}
    

function Navbar() {
  return (
    <>
      <nav style={styles.nav}>
      <Link to ='/'>Home</Link>
        <ul>
          <li>
            <Link to ='/featured'>Featured</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar