import React, { useState } from 'react';

const Form = ({ webLink }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className='container mx-auto w-full flex flex-col mb-20'>
      <div className="heading font-bold text-gray-500 mb-13 text-6xl">
        <h1>Appointment</h1>
      </div>

      <div className="Name mb-6">
        <input className='border-4 border-gray-500 rounded-lg p-2 w-158 mr-4' type="text" placeholder="First Name" />
        <input className='border-4 border-gray-500 rounded-lg p-2 w-158' type="text" placeholder="Last Name" />
      </div>

      <div className="Name mb-3">
        <input className='border-4 border-gray-500 rounded-lg p-2 w-158 mr-4' type="number" placeholder="Mobile Number" />
        <input className='border-4 border-gray-500 rounded-lg p-2 w-158' type="email" placeholder="Email" />
      </div>

      <div className="Name mb-3">
        <input className='border-4 border-gray-500 rounded-lg p-2 w-158 mr-4' type="text" placeholder="NIC" />
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

      <div className="Name mb-3">
        <select className="border-4 border-gray-500 text-gray-500 rounded-lg p-2 w-103 mr-5">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
        </select>
        <div className="relative inline-block">
          <input
            className='border-4 border-gray-500 text-gray-500 rounded-lg p-2 w-103 mr-6 appearance-none'
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {!date && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none bg-white px-2">
              Appointment Date
            </span>
          )}
        </div>
        <div className="relative inline-block">
          <input
            className='border-4 border-gray-500 rounded-lg p-2 w-103 text-gray-500 appearance-none'
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {!time && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none bg-white px-2">
              Appointment Time
            </span>
          )}
        </div>
      </div>

      <div className="Name mb-3">
        <select className='border-4 border-gray-500 rounded-lg p-2 w-158 text-gray-500 mr-4'>
          <option value="">Department Name</option>
        </select>
        <input className='border-4 border-gray-500 rounded-lg p-2 text-gray-500 w-158' type="text" placeholder="Doctor Name" />
      </div>

      <div className="message items-center flex flex-col">
        <input className='border-4 border-gray-500 rounded-lg w-full h-30 mb-5' type="text" placeholder="Address" />
        <a className='p-2 w-55 text-center font-bold bg-purple-800 text-amber-50 rounded-xl' href={webLink}>Register</a>
      </div>
    </div>
  );
};

export default Form;