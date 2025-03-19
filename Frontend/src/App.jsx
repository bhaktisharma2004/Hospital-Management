import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Appointment from './components/Appointment/Appointment'
import ContactUs from './components/ContactUs/ContactUs'
import Register from './components/Register/Register'
import SignIn from './components/Register/SignIn'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Appointment' element={<Appointment/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/SignIn' element={<SignIn/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
