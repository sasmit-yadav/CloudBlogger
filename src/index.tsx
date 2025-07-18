import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // If you see a type error for react-dom/client, run: npm i --save-dev @types/react-dom
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
