import React from "react";
import { FaBed, FaShower, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

function formatIdr(number) {
  let price = +number;
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}

export default function ProductCardMain({ houses }) {
  return (
    <div>
      {houses.map((house) => (
        <Link
          to={`/detail/${house.id}`}
          className="bg-white rounded-lg shadow-lg border flex flex-row hover:bg-gray-100 mb-6 hover:cursor-pointer"
        >
          <img
            src={house.Images[0].image}
            className="object-cover h-64 rounded-l-lg"
            width={250}
            alt=""
          ></img>
          <div className="flex-1 flex flex-col pt-5 px-5 text-left">
            <div className="font-bold text-xl tracking-wide">{house.title}</div>
            <div className="text-base tracking-wide mb-2">{house.location}</div>
            <div className="font-semibold text-base tracking-wide mb-5">
              {formatIdr(house.price)}
            </div>
            <div className="flex flex-row mb-2">
              <div className="flex flex-row mr-3">
                {house.Specification.totalBedroom}
                <FaBed className="mt-1 ml-2" />
              </div>
              <div className="mr-3 text-2xl -mt-3">.</div>
              <div className="flex flex-row mr-3">
                {house.Specification.totalBathroom}
                <FaShower className="mt-1 ml-2" />
              </div>
              <div className="mr-3 text-2xl -mt-3">.</div>
              <div className="flex flex-row mr-3">LT: {house.Specification.luasTanah} m2</div>
              <div className="mr-3 text-2xl -mt-3">.</div>
              <div className="flex flex-row mr-3">{house.Specification.dayaListrik} watt</div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="bg-emerald-200 text-emerald-700 rounded-full px-2 mr-2">
                {house.Specification.certificate}
              </div>
              <div className="bg-emerald-200 text-emerald-700 rounded-full px-2 mr-2">
                {formatIdr(house.instalment)}/month
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
        </Link>
      ))}
    </div>
  );
}
