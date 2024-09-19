import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ten plik może być opcjonalny, jeśli masz style CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
