import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Routes
import Landing from './views/Landing';
import Login from './views/Login';
import Signup from './components/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />

       <Route path="/signup" element={<Signup />} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);