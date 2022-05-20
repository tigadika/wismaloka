import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="absolute top-0 flex w-full justify-between px-10 py-4">
      <div>
        <Link to={"/"}>
          <img
            src={require("../assets/logo1.png")}
            alt=""
            width={150}
            height={75}
            className=""
          ></img>
        </Link>
      </div>
      <div className="mt-3">
        <Link className="mr-10 font-bold text-emerald-700" to={"/"}>
          Home
        </Link>
        <Link className="mr-10 font-bold text-emerald-700" to={"/all"}>
          Listings
        </Link>
        <Link className="mr-10 font-bold text-emerald-700" to={"/"}>
          Agents
        </Link>
        <Link className="font-bold text-emerald-700" to={"/"}>
          About
        </Link>
      </div>
      <div className="mt-1">
        <Link className="mr-3 font-bold text-emerald-700" to={"/"}>
          Sign Up
        </Link>
        <button className="bg-white py-2 px-4 rounded-lg shadow text-emerald-700 font-bold hover:bg-emerald-400 hover:text-white">
          Sign In
        </button>
      </div>
    </div>
  );
}
