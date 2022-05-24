import React from "react";

export default function UserProfile() {
  return (
    <div className="flex flex-row bg-white p-2 border-b hover:bg-gray-100 hover:cursor-pointer">
      <img
        src={require("../assets/hero1.png")}
        className="h-12 w-12 rounded-full p-1 bg-gray-100"
        alt=""
      ></img>
      <div className="flex flex-col text-left ml-3 my-auto">
        <p className="font-semibold">Nama</p>
        <p className="text-sm">Role</p>
      </div>
    </div>
  );
}
