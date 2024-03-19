import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

function HeaderManu() {
  return (
    <div className="flex gap-40">
      <div>
        <ul className=" flex gap-20">
          <li className="group relative">
            <Link to="/">
              <FaHome className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Home
            </h2>
          </li>
          <li className="group relative">
            <Link to="/video">
              <FaVideo className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Video
            </h2>
          </li>
          <li className="group relative">
            <Link to="/group">
              <MdGroupWork className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Group
            </h2>
          </li>
          <li className="group relative">
            <Link to="/game">
              <CgGames className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Games
            </h2>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" flex gap-2 ">
          <li className="group relative">
            <Link to="/manu">
              <CgDetailsMore className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Manu
            </h2>
          </li>
          <li className="group relative">
            <Link to="/chats">
              <FaFacebookMessenger className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Messenger
            </h2>
          </li>
          <li className="group relative">
            <Link to="/notifications">
              <IoNotifications className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 left-0 items-center cursor-pointer">
              Notifications
            </h2>
          </li>
          <li className="group relative">
            <Link to="/account">
              <FaUserAlt className=" items-center px-2 py-3 rounded-3xl text-5xl font-semibold hover:bg-slate-700   hover:text-slate-100 cursor-pointer" />
            </Link>
            <h2 className="bg-[#086FA4] px-3 py-2 rounded-xl font-medium text-slate-50 hidden absolute group-hover:block top-14 right-1 items-center cursor-pointer">
              Account
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderManu;
