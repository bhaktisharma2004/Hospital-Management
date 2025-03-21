import React from 'react'
import { Link } from 'react-router-dom'
const Signupnav = () => {
  return (
    <div className='flex w-full bg-gray-300 border-red-500 rounded-2xl justify-end gap-20 px-20'>
      <Link to="/Register/Admin"><h1>Admin</h1></Link>
      <Link to="/Register/Doctor"><h1>Doctor</h1></Link>
      <Link to="/Register/Patient"><h1>Patient</h1></Link>
    </div>
  )
}

export default Signupnav
