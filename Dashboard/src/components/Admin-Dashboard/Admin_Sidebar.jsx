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
import Dashboard from "./Dashboard";
import Chart from "./chart";
import DoctorDetails from "./DoctorDetails";
import Medicine from "./Medicine";

const Admin_Sidebar = () => {
  return (
    <div className="flex ">
      <div className=" w-[20%] rounded-2xl bg-green-300 ">
        <RxHamburgerMenu className="font-bold text-4xl ml-5 h-30" />
        <ul className="pl-8 gap-10 text-2xl font-bold flex flex-col h-150 w-100">
          <li className="flex flex-row gap-3 items-center ">
            {" "}
            <MdDashboardCustomize className="" /> Dashboard
          </li>
          <li className="flex flex-row gap-3 items-center">
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
      <div className="right w-[80%]" ><Dashboard/>
        <Chart/>
        <DoctorDetails/>
        <Medicine/>
      </div>
    </div>
  );
};

export default Admin_Sidebar;
