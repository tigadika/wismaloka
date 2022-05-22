import React from "react";
import { Link } from "react-router-dom";

export default function AgentAdd() {
  return (
    <>
      <div className="flex-1">
        <div className="mx-5 mt-10 flex flex-row justify-start">
          <Link
            to={"/agent"}
            className="bg-gray-200 rounded-t-lg text-sm text-gray-700 py-1 px-3 mr-1"
          >
            My Assets
          </Link>
          <Link
            to={"/agent/add"}
            className="bg-gray-100 rounded-t-lg text-sm text-gray-700 py-1 px-3 mr-1"
          >
            Add New Assets
          </Link>
        </div>
        <div className="bg-gray-100 rounded py-5 px-14 mb-5 shadow">
          <p className="text-xl font-bold tracking-wide mb-4">Add New Asset</p>
          <div className="mx-10">
            <form>
              {/* first field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-col text-left w-full">
                  <label className="mb-2 font-bold">Title</label>
                  <input
                    type="text"
                    className="py-2 px-4 rounded-lg shadow"
                    placeholder="e.g. Dijual rumah mewah dekat jalan M. H. Thamrin"
                  ></input>
                </div>
              </div>
              {/* second field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-col text-left w-1/3 mr-3">
                  <label className="mb-2 font-bold">Price</label>
                  <input
                    type="number"
                    className="py-2 px-4 rounded-lg shadow"
                    placeholder="e.g. 200000000"
                  ></input>
                </div>
                <div className="flex flex-col text-left w-1/3 mr-3">
                  <label className="mb-2 font-bold">Location</label>
                  <input
                    type="text"
                    className="py-2 px-4 rounded-lg shadow"
                    placeholder="e.g. Jalan Thamrin, Jakarta"
                  ></input>
                </div>
                <div className="flex flex-col text-left w-1/3 mr-3">
                  <label className="mb-2 font-bold">Certificate</label>
                  <input
                    type="text"
                    className="py-2 px-4 rounded-lg shadow"
                    placeholder="e.g. SHM"
                  ></input>
                </div>
              </div>
              {/* third field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-col text-left w-full">
                  <label className="mb-2 font-bold">Description</label>
                  <textarea
                    className="py-2 px-4 h-32 rounded-lg shadow"
                    placeholder="e.g. Dekat dengan Mall AEON"
                  ></textarea>
                </div>
              </div>
              {/* fourth field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-col text-left w-1/3 mr-3">
                  <label className="mb-2 font-bold">Luas Tanah</label>
                  <div className="flex flex-row">
                    <input
                      type="number"
                      className="py-2 px-4 w-4/5 rounded-lg shadow"
                      placeholder="e.g. 100"
                    ></input>
                    <p className="ml-3 mt-2">M2</p>
                  </div>
                </div>
                <div className="flex flex-col text-left w-1/3 mr-3">
                  <label className="mb-2 font-bold">Luas Bangunan</label>
                  <div className="flex flex-row">
                    <input
                      type="number"
                      className="py-2 px-4 w-4/5 rounded-lg shadow"
                      placeholder="e.g. 100"
                    ></input>
                    <p className="ml-3 mt-2">M2</p>
                  </div>
                </div>
                <div className="flex flex-col text-left w-1/3 mr-3">
                  <label className="mb-2 font-bold">Daya Listrik</label>
                  <div className="flex flex-row">
                    <input
                      type="number"
                      className="py-2 px-4 w-3/4 rounded-lg shadow"
                      placeholder="e.g. 100"
                    ></input>
                    <p className="ml-3 mt-2">Watt</p>
                  </div>
                </div>
              </div>
              {/* fifth field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-row w-full">
                  <div className="flex flex-col text-left w-1/3 mr-3">
                    <label className="mb-2 font-bold">Bedroom</label>
                    <input
                      type="number"
                      className="py-2 px-4 rounded-lg shadow"
                      placeholder="e.g. 3"
                    ></input>
                  </div>
                  <div className="flex flex-col text-left w-1/3 mr-3">
                    <label className="mb-2 font-bold">Bathroom</label>
                    <input
                      type="number"
                      className="py-2 px-4 rounded-lg shadow"
                      placeholder="e.g. 2"
                    ></input>
                  </div>
                  <div className="flex flex-col text-left w-1/3 mr-3">
                    <label className="mb-2 font-bold">Installment</label>
                    <select
                      type="text"
                      className="py-2 px-4 rounded-lg shadow"
                      placeholder="e.g. Jalan Thamrin, Jakarta"
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* sixth field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-col text-left w-1/3 mx-auto">
                  <label className="mb-2 font-bold mx-auto">Photos</label>
                  <input
                    type="file"
                    className="py-2 px-4 rounded-lg shadow bg-white"
                  ></input>
                </div>
              </div>
              {/* seventh field */}
              <div className="flex flex-row mb-5">
                <div className="flex flex-col text-left w-full mx-auto">
                  <label className="mb-2 font-bold mx-auto">Pin Location</label>
                  <div className="bg-white h-48 mx-10 rounded-lg shadow">
                    Maps Container
                  </div>
                </div>
              </div>
              <button className="mt-5 py-2 px-10 bg-emerald-700 text-white rounded-lg shadow font-bold hover:bg-emerald-800">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
