import React from "react";
import UserProfile from "../components/UserProfile";
import { FiSend } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ChatContainer() {
  return (
    <div className="bg-emerald-50 h-screen p-10">
      <div className="bg-white h-full rounded-lg flex flex-row shadow">
        <div className="flex flex-col w-1/3">
          <div className="bg-gray-100 border-r-2 h-14 flex flex-row p-3 justify-start items-center">
            <Link
              to={"/"}
              className="bg-gray-50 p-2 rounded-lg flex flex-row font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white"
            >
              <BsArrowLeft className="mt-1 mr-2" />
              <div>Back To Home</div>
            </Link>
          </div>
          <div className="flex-1 flex flex-col border-r-2">
            <UserProfile />
            <UserProfile />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between shadow">
          <div className="bg-gray-100 h-14 flex flex-row py-1 justify-center items-center">
            <img src={require("../assets/logo1.png")} className="w-36"></img>
            <p className="font-bold mt-1 ml-2 text-emerald-700">Chat App</p>
          </div>
          <div className="flex-1">Chat Container</div>
          <div className="bg-gray-100 h-14 flex flex-row p-2">
            <input
              type="text"
              className="rounded-lg flex-1 border shadow px-3"
            ></input>
            <button className="mx-3 bg-emerald-600 px-3 rounded-full text-white hover:bg-emerald-800">
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
