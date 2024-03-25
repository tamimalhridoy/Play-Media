import React from "react";

function Signup() {
  return (
    <body className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className=" container flex justify-center">
        <div className=" mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
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
              <p className="FistE bg-slate-700 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[55%] left-[-39.5%]">What's Your Name?</p>
              </div>
              <div className="">
              <input
                type="text"
                placeholder="Surname"
                class="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
              <p className="FistB bg-slate-700 text-lg font-normal text-white px-2 py-3 rounded-lg absolute ">What's Your Name?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Signup;
