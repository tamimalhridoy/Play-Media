import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="container flex justify-center p-14">
      <div className="mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
        <div className="px-4 py-3 flex justify-between">
          <div>
            <h2 className=" text-2xl font-bold">Sign Up</h2>
            <p className="text-gray-500 font-medium">It's quick and easy</p>
          </div>
          <div className="text-gray-600">
            <MdClose className=" text-3xl font-bold" />
          </div>
        </div>
        <hr className="bg-gray-600" />
        <div className="px-4 pt-3 pb-6 space-y-3">
          <div className="space-x-3 flex">
            <input
              className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              type="text"
              placeholder="First name"
            />
            {/* <p className="FistE bg-red-500 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[18%] left-[-50%]">
              What's Your First Name?
            </p> */}
            <input
              className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              type="text"
              placeholder="Surname"
            />
            {/* <p className="FistB bg-red-500 text-lg font-normal text-white px-2 py-4 rounded-lg absolute top-[5%] left-[43%] ">
              What's Your Surname?
            </p> */}
          </div>
          <div className=" flex flex-col gap-3">
            <input
              className="flex-1 w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              type="text"
              placeholder="Email address"
            />
            {/* <p className="FistC bg-red-500 text-lg font-normal w-full text-white px-4 py-3 rounded-lg absolute top-[28%] left-[97%]">
              please Email Address you required
            </p> */}
            <input
              className="flex-1 w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              type="text"
              placeholder="Password"
            />
            {/* <p className="FistD bg-red-500 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[37%] left-[-45%]">
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
          <p className="text-gray-600 mt-4">
            By clicking Sign Up, you agree to our
            <Link
              className="hover:text-blue-900 font-medium hover:underline"
              to="/terms"
            >
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
          <button className="bg-[#086FA4] text-lg text-white font-bold px-16 py-1 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
