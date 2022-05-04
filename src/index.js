import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GithubProvider } from './context/github/GithubContext';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from './context/alert/AlertContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>
);
