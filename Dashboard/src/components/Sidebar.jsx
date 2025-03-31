import React from 'react'
import {Link} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboardCustomize, MdPeopleAlt, MdLocalPharmacy, MdPersonalInjury } from "react-icons/md";
import { FaHouseChimneyMedical,FaHospitalUser } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";


const Sidebar = () => {
  return (
    <div>

      <div className=' w-80 bg-green-300' >
      <RxHamburgerMenu className='font-bold text-4xl ml-5 h-30' />
      <ul className='pl-8 gap-10 text-2xl font-bold flex flex-col h-700 w-100'>
        <li className='flex flex-row gap-3  ' > <MdDashboardCustomize className=''/> Dashboard</li>
        <li className='flex flex-row gap-3' > <MdPeopleAlt/> Staff</li>
        <li className='flex flex-row gap-3' > <FaHouseChimneyMedical/> Ward</li>
        <li className='flex flex-row gap-3' > <BiSolidInjection/> Treatment</li>
        <li className='flex flex-row gap-3' > <FaHospitalUser/> Lab</li>
        <li className='flex flex-row gap-3' > <MdLocalPharmacy/> Pharmacy</li>
        <li className='flex flex-row gap-3' > <MdPersonalInjury/> Patient</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
