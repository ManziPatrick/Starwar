import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; // Import Route
import ReactDOM from 'react-dom';
import App from './App.tsx';
import Lister from './pages/Lister.tsx';
import CharacterDetail from './pages/information.tsx'; // Import CharacterDetail

import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: '/lister',
    element: <Lister />,
  },
  {
    path: '/character/:characterId', // Define a route parameter for characterId
    element: <CharacterDetail />, // Render the CharacterDetail component
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
