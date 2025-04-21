import React, { useState } from "react";
import axios from "axios";


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4200/login', {email, password});  
      console.log(res.data);
      window.location.href="http://localhost:5173/"
      
      
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  return (
    <>
      <img
        className="absolute w-full h-[100%] object-cover opacity-30 z-0"
        src="/assets/bg.jpg"
        alt="Background"
      />
      <div className="flex flex-col items-center relative z-10 justify-center min-h-screen">
        {/* <LogInNav /> */}
        <div className="z-10 bg-white p-8 w-100  rounded-lg shadow-md">
          <h1 className="text-2xl flex flex-col items-center font-bold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange = {(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                // type="submit"
                onClick ={handleLogin}
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

export default LogIn;
