import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    fstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  });
  const auth = getAuth();
  const navigate = useNavigate();
  const hendelsubmit = () => {
    if (!fstName) {
      setUserError({ fstNameError: "What's Your First Name?" });
    } else if (!lastName) {
      setUserError({ lastNameError: "What's Your Surname?" });
    } else if (!email) {
      setUserError({ emailError: "please Email Address you required " });
    } else if (!password) {
      setUserError({ passwordError: " What's Your Password?" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          toast.success("Signup successful, Please verify your email ! ", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
          });
          setFstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code.includes("auth/invalid-email")) {
            setUserError({
              emailError:
                "You'll use this when you login in and if you ever need to reset your password ",
            });
          }
          if (error.code.includes("auth/email-already-in-use")) {
            setUserError({
              emailError: "Email Alrady in used, Pleace try another email",
            });
          }
          if (error.code.includes("auth/weak-password")) {
            setUserError({
              passwordError: "What's Your Password?",
            });
          }
        });
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <ToastContainer />
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
                  value={fstName}
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
                  value={lastName}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                type="text"
                placeholder="Email address"
              />
              {userError.emailError && (
                <p className="FistC bg-red-500 text-lg font-normal w-full text-white px-4 py-3 rounded-lg absolute top-[28%] left-[97%]">
                  {userError.emailError}
                </p>
              )}
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                type="password"
                placeholder="New password"
              />
              {userError.passwordError && (
                <p className="FistD bg-red-500 text-lg font-normal text-white px-2 py-3 rounded-lg absolute top-[37%] left-[-42%]">
                  {userError.passwordError}
                </p>
              )}
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
