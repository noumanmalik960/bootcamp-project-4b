import React from 'react';
import { Home } from './components/Home'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;