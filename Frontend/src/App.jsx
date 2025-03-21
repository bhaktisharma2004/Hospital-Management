import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Appointment from './components/Appointment/Appointment'
import ContactUs from './components/ContactUs/ContactUs'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register/SignUp/Register'
import LogIn from './components/Register/LogIn/SignIn'
import Admin from './components/Register/SignUp/Admin';
import Doctor from './components/Register/SignUp/Doctor';
import Patient from './components/Register/SignUp/Patient';

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
        <Route path='/Login' element={<LogIn/>} />
        
        <Route path='/Register/Admin' element={<Admin/>}/>
        <Route path='/Register/Patient' element={<Patient/>}/>
        <Route path='/Register/Doctor' element={<Doctor/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
