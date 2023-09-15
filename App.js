import React from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import TourismPage from './pages/TourismPage';
import ContactUsPage from './pages/ContactUsPage';

import './Css/Style.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;