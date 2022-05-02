import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GithubProvider } from './context/github/GithubContext';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GithubProvider>
  </React.StrictMode>
);
