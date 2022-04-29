import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About.js';
import Photos from './components/pages/Photos.js';
import SignUp from './components/pages/SignUp.js';
import Contact from './components/pages/Contact.js';
import Orlando from './components/pages/Orlando.js';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orlando" element={<Orlando />} />
        </Routes>
      </Router>
  );
}

export default App;
