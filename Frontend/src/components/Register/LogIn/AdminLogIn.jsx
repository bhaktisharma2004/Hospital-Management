import React from "react";
import LogInNav from "./LogInNav";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogIn = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Email & password required");
    }
    try {
      const response = await fetch("your-api-url-here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error occurred');  
      }

      const result = await response.json();
      console.log(result);
      if (result.success) {  // Assuming your API returns a success flag
        handleSuccess("Login Successful");
        window.location.href = "http://localhost:5173/";
      }

    } catch (err) {
      handleError(err.message);
    }
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: 'top-right'
    });
  };

  const handleError = (msg) => {
    toast.error(msg, {
      position: 'top-right'
    });
  };

  return (
    <>
      <img
        className="absolute w-full h-[100%] object-cover opacity-30 z-0"
        src="/assets/bg.jpg"
        alt="Background"
      />
      <div className="flex flex-col items-center relative z-10 justify-center min-h-screen">
        <LogInNav />
        <div className="z-10 bg-white p-8 w-100 rounded-lg shadow-md">
          <h1 className="text-2xl flex flex-col items-center font-bold mb-4">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                value={loginInfo.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                value={loginInfo.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit" onClick={handleLogin}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogIn;