import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated for React 18
import './index.css'; // Optional, if you have CSS styles
import App from '../src/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create the root for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
