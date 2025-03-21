import React from 'react'
import Signupnav from './Signupnav'
const Doctor = () => {
  return (
    <div>
      <Signupnav/>
      <div className="name">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
      </div>

      <div className="details">
        <input type="email" placeholder='Email' />
        <input type="number" placeholder='Mobile Number' />
      </div>

      <div className="department">
        <select name="" id="Departments">
            <option value="Departments"> Department Name </option>
        </select>
        <input type="number" placeholder='Adhar card Number' />
      </div>

      <div className="password">
        <select name="" id="gender">
            <option value="gender">Gender</option>
            <option value="gender">Male</option>
            <option value="gender">Female</option>
            <option value="gender">Other</option>
        </select>

        <input type="password" placeholder='Password' id='password' />
        <input type="password" placeholder='Confirm Password' id='password' />
      </div>

      <div className="button">
        <a href="http://" className='p-2 w-55 text-center font-bold bg-purple-800 text-amber-50 rounded-xl' >Register</a>
      </div>
    </div>
  )
}

export default Doctor
