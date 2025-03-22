import React from 'react'
import Signupnav from './Signupnav'
const Doctor = () => {
  return (
    <div className='flex flex-col items-center mb-10'>
      <Signupnav/>

      <div className="heading text-center mb-5 ">
        <h1 className="font-bold text-4xl">Sign Up</h1>
      </div>

      <div className="name mb-5">
        <input type="text"  className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4" placeholder='First Name' />
        <input type="text"  className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4" placeholder='Last Name' />
      </div>

      <div className="details mb-5">
        <input type="email"  className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4" placeholder='Email' />
        <input type="number"  className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4" placeholder='Mobile Number' />
      </div>

      <div className="department mb-5">
        <select name=""  className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4" id="Departments">
            <option value="Departments"> Department Name </option>
        </select>
        <input type="number"  className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4" placeholder='Adhar card Number' />
      </div>

      <div className="password mb-5">
        <select name=""  className="border-4 border-gray-500 rounded-lg p-2 w-65 mr-4" id="gender">
            <option value="gender">Gender</option>
            <option value="gender">Male</option>
            <option value="gender">Female</option>
            <option value="gender">Other</option>
        </select>

        <input type="password"  className="border-4 border-gray-500 rounded-lg p-2 w-65 mr-4" placeholder='Password' id='password' />
        <input type="password"  className="border-4 border-gray-500 rounded-lg p-2 w-65 mr-4" placeholder='Confirm Password' id='password' />
      </div>

      <div className="button">
        <a href="http://" className='p-2  text-center font-bold bg-purple-800 text-amber-50 rounded-xl w-[10%]' >Register</a>
      </div>
    </div>
  )
}

export default Doctor
