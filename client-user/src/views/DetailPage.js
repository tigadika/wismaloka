import React from "react";
import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";
import { FaCommentDots } from "react-icons/fa";

export default function DetailPage() {
  return (
    <>
      <div className="mt-20 border-b-2">
        <Navbar></Navbar>
      </div>
      <div className="mt-10 mx-24">
        <div className="text-left mb-5">
          <p className="text-2xl font-bold tracking-wide mb-5">
            Dijual Rumah dimana yaaa. Pokoknya ada deh.
          </p>
          <p className="text-lg">Lokasinya disini ya ges. Coba cari aku.</p>
        </div>
        <div className="w-full">
          <Carousel showArrows={true} autoPlay={3000} infiniteLoop={true}>
            <div>
              <img src={require("../assets/hero1.png")} alt=""></img>
            </div>
            <div>
              <img src={require("../assets/hero2.png")} alt=""></img>
            </div>
            <div>
              <img src={require("../assets/logo1.png")} alt=""></img>
            </div>
          </Carousel>
        </div>
        <div className="flex flex-row mb-10">
          <div className="flex-1 text-left">
            <p className="text-2xl font-bold tracking-wide mb-5">
              Property Information
            </p>
            <div className="flex flex-row mb-8">
              <div className="flex flex-col mr-20">
                <p className="text-gray-500 mb-2">Price</p>
                <p className="text-gray-500 mb-2">Luas Tanah</p>
                <p className="text-gray-500 mb-2">Luas Bangunan</p>
                <p className="text-gray-500 mb-2">Bedroom</p>
                <p className="text-gray-500 mb-2">Bathroom</p>
              </div>
              <div className="flex flex-col w-48 px-2 bg-gray-100 mr-2">
                <p className="mb-2">Rp 200.000.000</p>
                <p className="mb-2">182 m2</p>
                <p className="mb-2">100 m2</p>
                <p className="mb-2">3</p>
                <p className="mb-2">2</p>
              </div>
              <div className="flex flex-col mr-20">
                <p className="text-gray-500 mb-2">Sertifikat</p>
                <p className="text-gray-500 mb-2">Daya Listrik</p>
                <p className="text-gray-500 mb-2">Cicilan</p>
              </div>
              <div className="flex flex-col w-48 px-2 bg-gray-100">
                <p className="mb-2">SHM</p>
                <p className="mb-2">1300 watt</p>
                <p className="mb-2">No</p>
              </div>
            </div>
            <div className="border-b-2"></div>
            <p className="text-2xl font-bold tracking-wide my-5">Description</p>
            <div className="bg-gray-100 w-5/6 p-2 mb-10">
              <p>
                Rumah siap huni di komplek griya caraka <br />
                <br /> Luas Tanah 150 m2
                <br /> Luas Bangunan 100 m2
                <br /> 3 Kamar Tidur
                <br /> 2 Kamar Mandi
                <br /> Carport 2 mobil
                <br /> Taman kecil depan
                <br /> Sumber Air Artesis komplek
                <br /> Listrik 2200 Watt
                <br />
                <br /> . Siapa cepat dia dapat, bangunan kokoh terawat .
                Legalitas PBB, IMB dan Sertifikat hak milik Bisa di KPR kan
                <br />
                <br />
                Harga 1.5 M
              </p>
            </div>
            <div className="border-b-2"></div>
            <p className="text-2xl font-bold tracking-wide my-5">
              Location Map
            </p>
            <div className="bg-gray-100 w-5/6 h-96 p-2 mb-10">
              Google Maps Container
            </div>
          </div>
          <div className="w-1/3 flex">
            <div className="flex flex-col p-4 w-full">
              <div className="sticky top-12 border p-4">
                <div className="text-2xl font-bold text-emerald-700 mb-5">
                  Rp 200.000.000
                </div>
                <div className="border-b-2"></div>
                <div className="flex flex-row my-5">
                  <img
                    src={require("../assets/hero1.png")}
                    className="h-12 w-12 rounded-full p-1 bg-gray-100"
                    alt=""
                  ></img>
                  <div className="flex flex-col text-left ml-3 my-auto">
                    <p className="font-semibold">Nama Pengiklan</p>
                    <p className="text-sm">Role dia</p>
                  </div>
                </div>
                <div className="text-left mb-12">
                  <p>Wants to know more about this property?</p>
                  <p>Or want to schedule a meeting?</p>
                  <p>Contacts agent below</p>
                </div>
                <div>
                  <button className="border border-emerald-800 py-3 w-full rounded-lg text-emerald-700 hover:bg-emerald-700 hover:text-white">
                    <div className="flex flex-row justify-center">
                      <FaCommentDots className="mt-1 mr-2" />
                      <p className="font-bold">Chat Now</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
