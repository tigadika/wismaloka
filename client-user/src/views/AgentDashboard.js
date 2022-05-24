import React from "react";
import Navbar from "../components/Navbar";
import { FaCrown } from "react-icons/fa";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_HOUSE_BY_ID, GET_USERS_BY_ID } from "../queries/houseQuery";
import axios from "axios";

export default function AgentDashboard() {
  const idUser = localStorage.id;
  const isPremium = localStorage.isPremium;

  const { loading, error, data } = useQuery(GET_USERS_BY_ID, {
    variables: {
      getOneUserId: idUser,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  console.log(data);

  function submitPremium(e) {
    e.preventDefault();

    goPremium();
  }

  async function goPremium() {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3000/payment",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      // console.log(data);
      const paymentLink = data.redirect_url;
      // console.log(paymentLink);
      setTimeout(() => {
        window.location.href = paymentLink;
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mt-20 border-b-2">
        <Navbar></Navbar>
      </div>
      <div className="mx-20">
        <div className="flex flex-row">
          {/* Page Main */}
          <Outlet />
          {/* -- Agent Detail Card -- */}
          <div className="w-1/4 mt-10">
            <div className="bg-white border m-4 p-4 rounded-lg shadow flex flex-col sticky top-4">
              <p className="font-bold mb-2">Agent Detail</p>
              <div className="border-b-2"></div>
              <div className="flex flex-row my-5">
                <img
                  src={data.getOneUser.profilePict}
                  className="h-12 w-12 rounded-full p-1 bg-gray-100"
                  alt=""
                ></img>
                <div className="flex flex-col text-left ml-3 my-auto">
                  <p className="font-semibold">{data.getOneUser.username}</p>
                  <p className="text-sm">{data.getOneUser.role}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between mb-3">
                <p className="text-sm">Email</p>
                <p className="text-sm">{data.getOneUser.email}</p>
              </div>
              <div className="flex flex-row justify-between mb-10">
                <p className="text-sm">Phone Number</p>
                <p className="text-sm">{data.getOneUser.phoneNumber}</p>
              </div>
              {isPremium === "false" && (
                <button
                  className="border border-yellow-500 py-2 w-full rounded-lg text-yellow-500 hover:bg-yellow-400 hover:text-white"
                  onClick={submitPremium}
                >
                  <div className="flex flex-row justify-center">
                    <FaCrown className="mt-1 mr-2" />
                    <p className="font-bold">Go Premium</p>
                  </div>
                </button>
              )}
              {isPremium === "true" && (
                <div className="text-lg text-gray-500 flex flex-row justify-center">
                  <FaCrown className="mr-2 mt-1" />
                  <p>Premium Member</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
