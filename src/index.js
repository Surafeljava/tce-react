import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Item from './item';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route 
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App />}></Route>
            <Route exact path='/item' element={<Item />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
