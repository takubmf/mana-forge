import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

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

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};
  
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
          {Auth.loggedIn() ? (
            <button onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
              </>
          )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar