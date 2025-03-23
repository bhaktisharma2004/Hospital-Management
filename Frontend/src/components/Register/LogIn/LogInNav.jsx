import React from "react";
import { Link } from "react-router-dom";

const LogInNav = () => {
  return (
    <div className="flex w-[55%] z-10 border-red-500 justify-center items-center gap-20 px-20">
      <Link className="hover:bg-green-300 rounded-2xl px-4" to="/LogIn/Admin">
        <h1>Admin</h1>
      </Link>
      <Link className="hover:bg-green-300 rounded-2xl px-4" to="/LogIn/Doctor">
        <h1>Doctor</h1>
      </Link>
      <Link className="hover:bg-green-300 rounded-2xl px-4" to="/LogIn/Patient">
        <h1>Patient</h1>
      </Link>
    </div>
  );
};

export default LogInNav;
