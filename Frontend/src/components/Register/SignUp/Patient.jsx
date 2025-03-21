import React, {useState}  from 'react'
import Signupnav from './Signupnav';
const Patient = () => {
    const [date, setDate] = useState('');
  return (
    <div>
      <Signupnav/>
      <div className="heading">
        <h1></h1>
      </div>

      <div className="Name">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
      </div>

      <div className="details">
        <input type="email" placeholder='Email' />
        <input type="number" placeholder='Mobile Number' />
      </div>
      
      <div className="NIC">
        <input type="number" placeholder='Adhar Card Number' />
        <div className="relative inline-block">
          <input
            className='border-4 border-gray-500 text-gray-500 rounded-lg p-2 w-158 appearance-none'
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

          <div className="password">
            <select name="" id="">
                <option value="Gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
          </div>

      <div className="message items-center flex flex-col">
        <input className='border-4 border-gray-500 rounded-lg w-full h-30 mb-5' type="text" placeholder="Address" />
        <a className='p-2 w-55 text-center font-bold bg-purple-800 text-amber-50 rounded-xl' href="/">Register</a>
      </div>

    </div>
  )
}

export default Patient
