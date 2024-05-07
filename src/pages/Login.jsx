import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className='"w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6'>
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>

        <div className="flex flex-col">
          <input
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500  transition ease-in-out duration-150"
            type="email"
            placeholder="Email address"
          />
          <p className="bg-red-500 text-white font-semibold px-2 py-2 rounded-lg mb-4 "></p>

          <input
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, password: e.target.value })
            }
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500  transition ease-in-out duration-150"
            type="password"
            placeholder="Password"
          />
          {/* <p className="bg-red-500 text-white font-semibold px-2 py-2 rounded-lg mb-4 "></p> */}
          <div className=" flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className=" text-sm text-gray-200 cursor-pointer"
            >
              <input className=" mr-2" id="remember-me" type="checkbox" />
              Remember me
            </label>
            <Link
              className="text-sm text-blue-500 hover:underline mb-.5 "
              to="/forgetpass"
            >
              Forget Password
            </Link>
            <p className="text-white mt-4">
              Don't have an account?
              <Link
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
          <button
            onClick={loginsubmit}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
