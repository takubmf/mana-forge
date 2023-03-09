import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only for React version 18
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css';
import App from './App';
import Featured from './pages/Featured';
import Profile from './pages/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'featured',
        element: <Featured />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  root
);