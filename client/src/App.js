import React from 'react'
import { BrowserRouter as Route, Navigate, Outlet} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Featured from './pages/Featured';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    
    <ApolloProvider client={client}>
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
        <SearchBar></SearchBar>
        </div>
    </ApolloProvider>

    );
}


export default App;



