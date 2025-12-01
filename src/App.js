import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

import Home from './components/Home';
import Contact from './components/Contact';
import Offer from './components/Offer';
import Service from './components/Service';
import Sea from './components/Sea';
import Air from './components/Air';
import Custom from './components/Custom';
import Warehousing from './components/Warehousing';
import Odc from './components/Odc';
import Project from './components/Project';
import ScrollToTop from "./components/ScrollToTop";


// Global CSS imports
import './components/Sea.css';
import './components/Air.css';
import './components/Custom.css';
import './components/Warehousing.css';
import './components/Odc.css';
import './components/Project.css';


import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />

      
         <div style={{ marginTop: '120px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/service" element={<Service />} />
          <Route path="/sea" element={<Sea />} />
          <Route path="/air" element={<Air />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/odc" element={<Odc />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
