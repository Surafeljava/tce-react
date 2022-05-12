import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div>
      <CssBaseline/>
      <App />
    </div>
  </React.StrictMode>
);
