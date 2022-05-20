import React from "react";
import { FaBed, FaShower, FaCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductCardMain() {
  const navigate = useNavigate();
  function goToDetail() {
    navigate("/detail/1");
  }
  return (
    <div
      onClick={goToDetail}
      className="bg-white rounded-lg shadow-lg border flex flex-row hover:bg-gray-100 mb-6 hover:cursor-pointer"
    >
      <img
        src={require("../assets/hero1.png")}
        className="object-cover h-64 rounded-l-lg"
        width={250}
        alt=""
      ></img>
      <div className="flex-1 flex flex-col pt-5 px-5 text-left">
        <div className="font-bold text-xl tracking-wide">
          Title Rumah dijual harusnya akan...
        </div>
        <div className="text-base tracking-wide mb-2">Lokasi Rumah dijual</div>
        <div className="font-semibold text-base tracking-wide mb-5">
          Rp 200.000.000
        </div>
        <div className="flex flex-row mb-2">
          <div className="flex flex-row mr-3">
            3
            <FaBed className="mt-1 ml-2" />
          </div>
          <div className="mr-3 text-2xl -mt-3">.</div>
          <div className="flex flex-row mr-3">
            2
            <FaShower className="mt-1 ml-2" />
          </div>
          <div className="mr-3 text-2xl -mt-3">.</div>
          <div className="flex flex-row mr-3">78 m2</div>
          <div className="mr-3 text-2xl -mt-3">.</div>
          <div className="flex flex-row mr-3">1300 watt</div>
        </div>
        <div className="flex flex-row mb-2">
          <div className="bg-emerald-200 text-emerald-700 rounded-full px-2 mr-2">
            Rumah
          </div>
          <div className="bg-emerald-200 text-emerald-700 rounded-full px-2 mr-2">
            SHM - Sertifikat Hak Milik
          </div>
          <div className="bg-emerald-200 text-emerald-700 rounded-full px-2 mr-2">
            Cicilan
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <img
            src={require("../assets/hero1.png")}
            className="h-12 w-12 rounded-full p-1 bg-gray-100"
            alt=""
          ></img>
          <div className="text-sm my-auto ml-2">Added By</div>
          <div className="text-sm font-bold ml-1 my-auto">Username</div>
          <div className="ml-auto my-auto">
            <button className="border border-emerald-800 px-3 py-1 rounded-lg">
              <div className="flex flex-row text-emerald-700">
                <FaCommentDots className="mt-1 mr-2" />
                <p className="font-bold">Chat Now</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
