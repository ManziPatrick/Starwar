import React from 'react';
import Error from './pages/Error.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'; // Import Route
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Lister from './pages/Lister.jsx';
import CharacterDetail from './pages/information.jsx';

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
    path: '/character/:characterId', 
    element: <CharacterDetail />, 
  },
 
  { path:"*" ,
  element:<Error />}

  ,
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
