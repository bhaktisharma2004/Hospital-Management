import React, { useState } from 'react';
import Signupnav from './Signupnav'
const Admin = () => {
  const [date, setDate] = useState("");
  return (
    <div className='flex flex-col items-center'>
      <Signupnav/>
      <h1>Admin</h1>
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

      <div className="NIC mb-5">
        <input
          type="number"
          className="border-4 border-gray-500 rounded-lg p-2 w-100 mr-4"
          placeholder="Adhar Card Number"
        />
        <div className="relative inline-block">
          <input
            className="border-4 border-gray-500 text-gray-500 rounded-lg p-2 w-100 appearance-none"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {!date && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none bg-white px-2">
              Date of Birth
            </span>
          )}
        </div>
      </div>

      <div className="password mb-5">
        <select className="border-4 border-gray-500 rounded-lg p-2 w-60 mr-12">
          <option value="Gender">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="password"
          className="border-4 border-gray-500 rounded-lg p-2 w-60 mr-12"
          placeholder="Password"
        />
        <input
          type="password"
          className="border-4 border-gray-500 rounded-lg p-2 w-60 "
          placeholder="Confirm Password"
        />
      </div>

      <div className="message items-center flex mb-5 flex-col">
        <a
          className="p-2 w-55 text-center font-bold bg-purple-800 text-amber-50 rounded-xl"
          href="/"
        >
          Register
        </a>
      </div>
    </div>
  )
}

export default Admin
