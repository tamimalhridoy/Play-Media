import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <body className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className=" container flex justify-center p-14">
        <div className="  mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
          <div className="px-4 py-3 flex justify-between">
            <div className="">
              <h2 className=" text-xl font-bold">Sign Up</h2>
              <p className="text-gray-500">It's quick and easy.</p>
            </div>
            <div className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <hr className="bg-gray-600" />
          <div className="px-4 pt-3 pb-6 space-y-3">
            <div className="space-x-3 flex">
              <div className="">
                <input
                  className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  type="text"
                  placeholder="First name"
                />
                {/* <p className="FistE bg-red-500 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[18%] left-[-45%]">
                  What's Your First Name?
                </p> */}
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Surname"
                  class="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                />
                {/* <p className="FistB bg-red-500 text-lg font-normal text-white px-2 py-4 rounded-lg absolute top-[5%] ">
                  What's Your Surname?
                </p> */}
              </div>
            </div>
            <div>
              <input
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                type="text"
                placeholder="Email address"
              />
              {/* <p className="FistC bg-red-500 text-lg font-normal w-full text-white px-4 py-3 rounded-lg absolute top-[28%] left-[97%]">
                You'll use this when you login in and if you ever need to reset
                your password.
              </p> */}
            </div>
            <div>
              <input
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                type="password"
                placeholder="New password"
              />
              {/* <p className="FistD bg-red-500 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[37%] left-[-42%]">
                What's Your Password?
              </p> */}
            </div>
          </div>
          <div className="px-4 py-3">
            <p className="text-gray-600">
              People who use our service may have uploaded your contact
              information to Playmedia.
              <Link className="hover:text-blue-900 font-medium hover:underline">
                Learn more
              </Link>
            </p>
            <p class="text-gray-600 mt-4">
              By clicking Sign Up, you agree to our
              <Link className="hover:text-blue-900 font-medium hover:underline">
                Terms
              </Link>
              ,
              <Link className="hover:text-blue-900 font-medium hover:underline">
                Privacy Policy
              </Link>
              and
              <Link className="hover:text-blue-900 font-medium hover:underline">
                Cookies Policy
              </Link>
              . You may receive SMS notifications from us and can opt out at any
              time.
            </p>
          </div>
          <div className="text-center py-6">
            <button className=" bg-[#086FA4] text-lg text-white font-bold px-16 py-1 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Signup;
