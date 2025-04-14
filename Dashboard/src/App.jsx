import React from "react";
import "./App.css";
import Admin_Sidebar from "./components/Admin-Dashboard/Admin_Sidebar";
import Doctor_Sidebar from "./components/Doctor-Dashboard/Doctor_Sidebar"
import Patient_Sidebar from "./components/Patient-Dashboard/Patient_Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    
      <Navbar/>

       <Routes> 
        <Route path="/" element={<Admin_Sidebar />} />
        <Route path="/doctor" element={<Doctor_Sidebar />} />
        <Route path="/patient" element={<Patient_Sidebar />} />
      
       {/* /<Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Staff" element={<Staff/>}></Route>
        <Route path="/Lab" element={<Lab/>}></Route>
        <Route path="/Ward" element={<Ward/>}></Route>
        <Route path="/Treatment" element={<Treatment/>}></Route>
        <Route path="/Pharmacy" element={<Pharmacy/>}></Route>
        <Route path="/Patient" element={<Patient/>}></Route>  */}
       </Routes> 
    </>
  );
}

export default App;
