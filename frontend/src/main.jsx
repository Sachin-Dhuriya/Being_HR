import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers.jsx';
import { SearchProvider } from './Components/Header/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </SearchProvider>
);
