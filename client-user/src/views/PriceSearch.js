import React from "react";
import { Link } from "react-router-dom";

export default function PriceSearch() {
  return (
    <>
      <div className="flex flex-row justify-around">
        <Link
          to={""}
          className="w-full py-3 border-b-4 border-r-2 border-b-emerald-700 hover:bg-emerald-50 hover:cursor-pointer"
        >
          <div>
            <p className="text-emerald-700 text-lg font-bold">
              Based on budget
            </p>
          </div>
        </Link>
        <Link
          to={"maps"}
          className="w-full py-3 border-b-2 hover:bg-emerald-50 hover:cursor-pointer"
        >
          <div>
            <p className="text-emerald-700 text-lg font-bold">
              Based on location
            </p>
          </div>
        </Link>
      </div>
      <div>
        <form>
          <div className="flex flex-wrap my-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Numbers Bedroom
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                type="number"
                placeholder="e.g. 4"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Numbers Bathroom
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                type="number"
                placeholder="e.g. 2"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                type="number"
                placeholder="e.g. 200.000.000"
              />
            </div>
          </div>
          <div className="mx-4 mb-6">
            <button className="w-full bg-emerald-800 text-white p-3 rounded-lg">
              Find your ideal home
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
