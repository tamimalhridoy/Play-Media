import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  let [fstName, setFstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [userError, setUserError] = useState({
    fstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  });
  const auth = getAuth();
  const hendelsubmit = () => {
    if (!fstName) {
      setUserError({ fstNameError: "What's Your First Name?" });
    } else if (!lastName) {
      setUserError({ lastNameError: "What's Your Surname?" });
    } else if (!email) {
      setUserError({ emailError: "please Email Address you required " });
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Signup successful!");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className=" container flex justify-center p-14">
        <div className="  mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
          <div className="px-4 py-3 flex justify-between">
            <div className="">
              <h2 className=" text-xl font-bold">Sign Up</h2>
              <p className="text-gray-500">It's quick and easy.</p>
            </div>
            <div className="text-gray-600">
              <MdClose className=" text-3xl font-bold" />
            </div>
          </div>
          <hr className="bg-gray-600" />
          <div className="px-4 pt-3 pb-6 space-y-3">
            <div className="space-x-3 flex">
              <div className="">
                <input
                  onChange={(e) => setFstName(e.target.value)}
                  className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  type="text"
                  placeholder="First name"
                />
                {userError.fstNameError && (
                  <p className="FistE bg-red-500 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[18%] left-[-45%]">
                    {userError.fstNameError}
                  </p>
                )}
              </div>
              <div className="">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Surname"
                  className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                />
                {userError.lastNameError && (
                  <p className="FistB bg-red-500 text-lg font-normal text-white px-2 py-4 rounded-lg absolute top-[5%] ">
                    {userError.lastNameError}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                type="text"
                placeholder="Email address"
              />
              {userError.emailError &&(
                <p className="FistC bg-red-500 text-lg font-normal w-full text-white px-4 py-3 rounded-lg absolute top-[28%] left-[97%]">
                {userError.emailError}
              </p>
              )}
              
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
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
            <p className="text-gray-600 mt-4">
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
            <button
              onClick={hendelsubmit}
              className=" bg-[#086FA4] text-lg text-white font-bold px-16 py-1 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
