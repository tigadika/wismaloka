import React from "react";
import Navbar from "../components/Navbar";
import { FaCrown } from "react-icons/fa";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AgentDashboard() {
  return (
    <>
      <div className="mt-20 border-b-2">
        <Navbar></Navbar>
      </div>
      <div className="mx-20">
        <div className="flex flex-row">
          {/* Page Main */}
          <Outlet />
          {/* -- Agent Detail Card -- */}
          <div className="w-1/4 mt-10">
            <div className="bg-white border m-4 p-4 rounded-lg shadow flex flex-col sticky top-4">
              <p className="font-bold mb-2">Agent Detail</p>
              <div className="border-b-2"></div>
              <div className="flex flex-row my-5">
                <img
                  src={require("../assets/hero1.png")}
                  className="h-12 w-12 rounded-full p-1 bg-gray-100"
                  alt=""
                ></img>
                <div className="flex flex-col text-left ml-3 my-auto">
                  <p className="font-semibold">Nama Pengiklan</p>
                  <p className="text-sm">Role dia</p>
                </div>
              </div>
              <div className="flex flex-row justify-between mb-3">
                <p className="text-sm">Email</p>
                <p className="text-sm">Email si agen</p>
              </div>
              <div className="flex flex-row justify-between mb-10">
                <p className="text-sm">Phone Number</p>
                <p className="text-sm">Nomor si agen</p>
              </div>
              <button className="border border-yellow-500 py-2 w-full rounded-lg text-yellow-500 hover:bg-yellow-400 hover:text-white">
                <div className="flex flex-row justify-center">
                  <FaCrown className="mt-1 mr-2" />
                  <p className="font-bold">Go Premium</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
