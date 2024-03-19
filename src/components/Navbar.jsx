import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdOutlineGroup } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

function Navbar() {
  return (
    <div className=" bg-white h-screen w-60">
      <div>
        <ul className=" flex flex-col gap-5 mt-4">
          <li>
            <Link
              to="/account"
              className=" flex gap-3 items-center rounded-lg hover:bg-slate-500 hover:text-white px-3 py-3 cursor-pointer "
            >
              <FaUserAlt className=" font-bold text-3xl" />
              <p className=" text-xl font-medium">User Details </p>
            </Link>
          </li>
          <li>
            <Link
              to="/chats"
              className=" flex gap-3 items-center rounded-lg hover:bg-slate-500 hover:text-white px-3 py-3 cursor-pointer "
            >
              <IoChatbubbleEllipses className=" font-bold text-3xl" />
              <p className=" text-xl font-medium">Chat</p>
            </Link>
          </li>
          <li>
            <Link
              to="/group"
              className=" flex gap-3 items-center rounded-lg hover:bg-slate-500 hover:text-white px-3 py-3 cursor-pointer "
            >
              <MdOutlineGroup className=" font-bold text-3xl" />
              <p className=" text-xl font-medium">Group</p>
            </Link>
          </li>
          <li>
            <Link
              to="/friends"
              className=" flex gap-3 items-center rounded-lg hover:bg-slate-500 hover:text-white px-3 py-3 cursor-pointer "
            >
              <FaUserFriends className=" font-bold text-3xl" />
              <p className=" text-xl font-medium">Friends</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
