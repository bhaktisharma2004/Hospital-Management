import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdDashboardCustomize,
  MdPeopleAlt,
  MdLocalPharmacy,
  MdPersonalInjury,
} from "react-icons/md";
import { FaHouseChimneyMedical, FaHospitalUser } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
const Patient_Sidebar = () => {
  return (
    <div>
      <div>
        <div className=" w-80 bg-green-300">
          <RxHamburgerMenu className="font-bold text-4xl ml-5 h-30" />
          <ul className="pl-8 gap-10 text-2xl font-bold flex flex-col h-700 w-100">
            <li className="flex flex-row gap-3  ">
              {" "}
              <MdDashboardCustomize className="" /> Dashboard
            </li>
            <li className="flex flex-row gap-3 items-center ">
              {" "}
              <MdPeopleAlt /> Staff
            </li>
            <li className="flex flex-row gap-3 items-center">
              {" "}
              <FaHouseChimneyMedical /> Ward
            </li>
            <li className="flex flex-row gap-3 items-center">
              {" "}
              <BiSolidInjection /> Treatment
            </li>
            <li className="flex flex-row gap-3 items-center">
              {" "}
              <FaHospitalUser /> Lab
            </li>
            <li className="flex flex-row gap-3 items-center">
              {" "}
              <MdLocalPharmacy /> Pharmacy
            </li>
            <li className="flex flex-row gap-3 items-center">
              {" "}
              <MdPersonalInjury /> Patient
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patient_Sidebar;
