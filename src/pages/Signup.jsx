import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const auth = getAuth();
  let [firstName, SetFirstName] = useState("");
  let [lastName, SetLastName] = useState("");
  let [email, SetEmail] = useState("");
  let [confirmEmail, SetConfirmEmail] = useState("");
  let [password, SetPassword] = useState("");
  let [confirmPassword, SetConfirmPassword] = useState("");
  const [userError, SetUserError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    confirmEmailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);
  // console.log(confirmEmail);
  // console.log(password);
  // console.log(confirmPassword);

  // const hendelchange = () => {};

  const handelSubmit = () => {
    if (!firstName) {
      SetUserError({firstNameError: "First Name is required !"});
    }
    createUserWithEmailAndPassword(
      auth,
      firstName,
      lastName,
      email,
      confirmEmail,
      password,
      confirmPassword
    )
      .then(() => {
        console.log("Signup Successful!");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

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
            <div className="flex flex-col">
              <div className="flex space-x-4 mb-4">
                <input
                  onChange={(e) => SetFirstName(e.target.value)}
                  placeholder="First Name"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
                {userError.firstNameError && (
                  <p className=" text-start text-white text-xl py-1 px -1 bg-red-500 rounded-2xl w-fit">{userError.firstNameError}</p>
                )}
                <input
                  onChange={(e) => SetLastName(e.target.value)}
                  placeholder="Last Name"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
              </div>
              <input
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="Email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
              />
              <input
                onChange={(e) => SetConfirmEmail(e.target.value)}
                placeholder="Confirm Email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
              />
              <input
                onChange={(e) => SetPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <input
                onChange={(e) => SetConfirmPassword(e.target.value)}
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
                onClick={handelSubmit}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
