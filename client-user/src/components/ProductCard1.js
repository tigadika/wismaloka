import React from "react";

export default function ProductCard1() {
  return (
    <div className="w-1/5 bg-white rounded-lg shadow-lg mr-10 hover:border-2 hover:border-emerald-800">
      <img
        src="https://source.unsplash.com/random?house"
        className="rounded-t-lg"
        alt=""
      ></img>
      <div className="py-5 px-3">
        <p className="text-left text-lg font-bold tracking-tight text-emerald-700 mb-3">
          Lakeside Manor
        </p>
        <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
