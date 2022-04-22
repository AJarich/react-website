import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
  );
}

export default App;
