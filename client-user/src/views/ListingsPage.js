import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCardMain from "../components/ProductCardMain";
import { GET_HOUSE } from "../queries/houseQuery";
import { useQuery } from "@apollo/client";
export default function ListingsPage() {
  const { loading, error, data } = useQuery(GET_HOUSE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const houses = data.getHouse;
  return (
    <>
      <div className="mt-20 border-b-2">
        <Navbar></Navbar>
      </div>
      <div className="mb-3 pt-1 flex-row sticky top-0 bg-white">
        <form>
          <div className="border-b-2">
            <form>
              <div className="flex flex-wrap mt-3 justify-center">
                <div className="w-1/6 px-3">
                  <label
                    className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Numbers Bedroom
                  </label>
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="name"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                  </select>
                </div>

                <div className="w-1/6 px-3 mb-6">
                  <label
                    className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Numbers Bathroom
                  </label>
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="name"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                  </select>
                </div>

                <div className="w-1/6 px-3 mb-6">
                  <label
                    className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Price
                  </label>
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="name"
                  >
                    <option>100 Jt - 200 Jt</option>
                    <option>200 Jt - 500 Jt</option>
                    <option>500 Jt - 1 M</option>
                    <option>Diatas 1 M</option>
                  </select>
                </div>

                <div className="w-1/6 px-3">
                  <label
                    className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Location
                  </label>
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="name"
                  >
                    <option>Jakarta</option>
                    <option>Bogor</option>
                    <option>Depok</option>
                    <option>Tanggerang</option>
                    <option>Bekasi</option>
                    <option>Bandung</option>
                  </select>
                </div>
                <div className="ml-2 py-5">
                  <button className="bg-emerald-800 text-white py-1 px-3 rounded-lg">
                    Filter search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
      <div className="flex flex-row mx-48">
        <div className="flex-col h-12 w-1/4 bg-orange-300">Sidebar isi apa ya guys</div>
        <div className="flex-1 flex-col p-5">
          <ProductCardMain houses={houses}></ProductCardMain>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
