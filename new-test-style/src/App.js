import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Home from './components/home/Home'
import Footer  from './components/footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
import ProductDetails from './components/pages/ProductDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/products/:id" element={<Products/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/sign-up" element={<SignUp/>} />
        <Route exact path="/marketing" element={<Marketing/>} />
        <Route exact path="/consulting" element={<Consulting/>} />
        <Route exact path="/consulting" element={<Consulting/>} />
        <Route exact path="/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer/>
      <ScrollButton />
    </Router>
  );
}

export default App;
