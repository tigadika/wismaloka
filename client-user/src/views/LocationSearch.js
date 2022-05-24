import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_HOUSE } from "../queries/houseQuery";
import MapSearch from "../components/MapSearch";
import { BiArrowBack } from "react-icons/bi";

export default function LocationSearch() {
  const { loading, error, data } = useQuery(GET_HOUSE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <MapSearch data={data}></MapSearch>
      <Link
        to={"/"}
        className="w-16 absolute top-5 left-5 bg-white text-emerald-700 border-2 border-emerald-700 p-3 rounded-lg"
      >
        <BiArrowBack className="text-2xl mx-auto" />
      </Link>
      {/* <div className="absolute">
        <div className="flex flex-wrap my-6 mx-4 rounded-lg shadow"></div>
        <form>
          <div className="mx-4 mb-6">
            <button className="w-full bg-emerald-800 text-white p-3 rounded-lg">
              Find homes near you
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
}
