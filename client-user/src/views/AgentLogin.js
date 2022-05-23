import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AgentLogin() {
  return (
    <>
      <div className="mt-20 border-b-2">
        <Navbar></Navbar>
      </div>
      <div className="w-full py-20">
        <div className="w-5/12 rounded border-2 shadow bg-white mx-auto px-24">
          <img
            src={require("../assets/logo1.png")}
            className="w-36 mx-auto my-6"
            alt=""
          ></img>
          <p className="text-sm text-center mt-3 mb-10">
            Login to start listing your assets in Wismaloka
          </p>

          <form>
            <div className="w-full ">
              <div className="flex flex-col px-10 mb-3">
                <label className="mb-2 font-bold text-sm text-left">
                  Email
                </label>
                <input
                  type="email"
                  className="py-2 px-4 border-2 rounded-lg shadow"
                  placeholder="Insert Email"
                ></input>
              </div>
              <div className="flex flex-col px-10 mb-10">
                <label className="mb-2 font-bold text-sm text-left">
                  Password
                </label>
                <input
                  type="password"
                  className="py-2 px-4 border-2 rounded-lg shadow"
                  placeholder="Insert Password"
                ></input>
              </div>
            </div>
          </form>
          <div className="text-center mx-10 mb-5">
            <button className="bg-emerald-700 w-full py-2 rounded-lg shadow font-bold text-white hover:bg-emerald-800">
              Sign In
            </button>
          </div>
          <div className="flex flex-row justify-between mx-10 mb-10">
            <p className="text-sm">Don't have account yet?</p>
            <p className="text-sm text-emerald-700 font-bold hover:text-emerald-500 hover:cursor-pointer">
              Sign Up
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}