import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/Auth';
import { SearchProvider } from './contexts/Search';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </AuthProvider>,
  document.getElementById('root')
);
