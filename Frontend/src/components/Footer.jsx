import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex justify-around ">
      <div>
        <Link className="flex gap-4 items-center" to="/">
          <img
            src="assets/logo.jpeg"
            className="rounded-full"
            style={{ width: "60px" }}
            alt="logo"
          />
          <span className="shadow-black text-lg">Fit-Pulse Medical</span>{" "}
        </Link>
      </div>
      <div>
        <h4 className="font-bold  mb-2">Quick Links</h4>
        <ul className="text-gray-400 flex-col space-y-2">
          <li class="">
            <Link className=" p-1 rounded-xl" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class=" ">
            <Link className=" p-1 rounded-xl" aria-current="page" to="/AboutUs">
              About Us
            </Link>
          </li>
          <li class="">
            <Link
              className=" p-1 rounded-xl"
              aria-current="page"
              to="/Appointment"
            >
              Appointment
            </Link>
          </li>
          <li class="">
            <Link
              className=" p-1 rounded-xl"
              aria-current="page"
              to="/ContactUs"
            >
              {" "}
              Contact Us
            </Link>
          </li>
          <li class="">
            <Link
              className="p-3 hover:bg-gray-200 rounded-xl"
              aria-current="page"
              to="/"
            >
              <i class="fa fa-bars" aria-hidden="true"></i>{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">Hours</h4>
        
      </div>
      <div>
        <h4 className="font-bold">Contact</h4>
      </div>
    </div>
  );
};

export default Footer;
