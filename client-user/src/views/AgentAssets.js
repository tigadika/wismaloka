import React from "react";
import ProductCardMain from "../components/ProductCardMain";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AgentAssets() {
  return (
    <>
      <div className="flex-1">
        <div className="mx-5 mt-10 flex flex-row justify-start">
          <Link
            to={""}
            className="bg-gray-100 rounded-t-lg text-sm text-gray-700 py-1 px-3 mr-1"
          >
            My Assets
          </Link>
          <Link
            to={"add"}
            className="bg-gray-200 rounded-t-lg text-sm text-gray-700 py-1 px-3 mr-1"
          >
            Add New Assets
          </Link>
        </div>
        <div className="bg-gray-100 rounded py-5 px-14 mb-5 shadow">
          <p className="text-xl font-bold tracking-wide mb-4">List of Assets</p>
          <ProductCardMain></ProductCardMain>
          <ProductCardMain></ProductCardMain>
          <ProductCardMain></ProductCardMain>
          <p className="text-xl font-bold text-emerald-700 tracking-wide mt-14 mb-3">
            Regular user can only have 3 live assets.
          </p>
          <p className="mb-3">
            To be able to display more than 3 assets, try premium.
          </p>
          <button className="border shadow border-yellow-500 py-2 px-3 rounded-lg text-yellow-500 hover:bg-yellow-400 hover:text-white">
            <div className="flex flex-row justify-center">
              <FaCrown className="mt-1 mr-2" />
              <p className="font-bold">Go Premium</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
