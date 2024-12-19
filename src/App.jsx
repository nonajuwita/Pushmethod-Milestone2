import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar akan selalu tampil */}
      <Navbar />
      
      {/* Rute untuk halaman */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
