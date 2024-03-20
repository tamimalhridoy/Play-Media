import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-slate-900">
      <div className="container p-20">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <Link
              className="text-[#6366f2] font-black text-6xl leading-loose"
              to="/"
            >
              PLAYMEDIA
            </Link>
            <h2 className=" font-bold text-3xl uppercase text-slate-50 mb-2">
              Get started with easily register
            </h2>
            <h2 className=" font-normal text-xl text-gray-500">
              Free register and you can enjoy it
            </h2>
          </div>
          <div className="w-full max-w-md bg-gray-800  rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Sign Up</h2>
            <form className="flex flex-col">
              <div className="flex space-x-4 mb-4">
                <input
                  placeholder="First Name"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
                <input
                  placeholder="Last Name"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
              </div>
              <input
                placeholder="Email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
              />
              <input
                placeholder="Confirm Email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
              />
              <input
                placeholder="Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <input
                placeholder="Confirm Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <label
                className="text-sm mb-2 text-gray-200 cursor-pointer"
                for="gender"
              >
                Gender
              </label>
              <select
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label
                className="text-sm mb-2 text-gray-200 cursor-pointer"
                for="age"
              >
                Age
              </label>
              <input
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
                id="age"
                type="date"
              />
              <p className="text-white mt-4">
                Already have an account?
                <Link
                  to="/login"
                  className="text-sm text-blue-500 -200 hover:underline mt-4"
                >
                  Login
                </Link>
              </p>
              <button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
