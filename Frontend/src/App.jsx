import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Appointment from './components/Appointment/Appointment';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register/SignUp/Register';
import LogIn from './components/Register/LogIn/SignIn';
import Admin from './components/Register/SignUp/Admin';
import Doctor from './components/Register/SignUp/Doctor';
import Patient from './components/Register/SignUp/Patient';
import AdminLogIn from './components/Register/LogIn/AdminLogIn';
import DoctorLogIn from './components/Register/LogIn/DoctorLogIn'
import PatientLogIn from './components/Register/LogIn/PatientLogIn';

const App = () => {
  const location = useLocation();

  // Define routes where the footer should not be visible
  const noFooterRoutes = ['/Register', '/Register/Admin', '/Register/Patient', '/Register/Doctor','/Login', '/LogIn/Admin', '/LogIn/Doctor', '/LogIn/Patient',];

  // Check if the current route is in the noFooterRoutes array
  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Appointment' element={<Appointment />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<LogIn />} />
        <Route path='/Register/Admin' element={<Admin />} />
        <Route path='/Register/Patient' element={<Patient />} />
        <Route path='/Register/Doctor' element={<Doctor />} />
        <Route path='/Login/Admin' element={<AdminLogIn />} />
        <Route path='/Login/Doctor' element={<DoctorLogIn />} />
        <Route path='/Login/Patient' element={<PatientLogIn />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default App;