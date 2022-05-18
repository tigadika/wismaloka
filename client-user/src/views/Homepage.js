import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard1 from "../components/ProductCard1";
import LandingFeatured from "../components/LandingFeatured";

export default function Homepage() {
  return (
    <div className="px-10">
      <div className="mt-8 relative">
        <img
          src={require(`../assets/hero1.png`)}
          className="object-cover shadow-lg rounded-xl"
          alt=""
        ></img>
        <Navbar></Navbar>
        <div className="absolute top-8 container mt-28">
          <div className="flex flex-row">
            <p className="text-5xl ml-auto font-bold tracking-wide mb-4">
              Find a perfect
            </p>
            <p className="text-emerald-400 mr-auto ml-4 text-5xl font-bold tracking-wide">
              home
            </p>
          </div>
          <p className="text-5xl font-bold tracking-wide">just for you.</p>
        </div>
      </div>
      <div className="absolute -mt-28 container">
        <div className="p-2 bg-white shadow-xl rounded-lg w-1/2 mx-auto">
          <Outlet />
        </div>
        <div className="my-8">
          <p className="text-3xl font-bold mb-7">Featured</p>
          <div className="flex flex-row mx-8">
            <ProductCard1></ProductCard1>
            <ProductCard1></ProductCard1>
            <ProductCard1></ProductCard1>
            <LandingFeatured></LandingFeatured>
          </div>
        </div>
      </div>
    </div>
  );
}
