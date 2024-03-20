import React, { useState } from 'react';
import { axiosClient } from '../../Api/axios';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ObjetLogin = { email: email, password: password };
    try {
      await axiosClient.get('sanctum/csrf-cookie'); 
      const response = await axiosClient.post("/login", ObjetLogin);
    //   console.log(response.data); 
    if(response.status === 200){
        alert('hello from dashboard')
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="bg-white my-32 flex justify-center items-center">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <span className="text-sm text-gray-900">Welcome back</span>
              <h1 className="text-2xl font-bold">Student Login</h1>
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="block text-md mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <div>
                <input className="cursor-pointer" type="radio" name="rememberme" />
                <span className="text-sm">Remember Me</span>
              </div>
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="">
              <button type="submit" className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                Login now
              </button>
              <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                <img className="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                <button>Or sign-in with google</button>
              </div>
            </div>
          </form>
          <p className="mt-8">
            Don't have an account? <span className="cursor-pointer text-sm text-blue-600">Join free today</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
