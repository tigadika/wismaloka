import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

export default function AgentAdd() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [certificate, setCertification] = useState("");
    const [description, setDescription] = useState("");
    const [luasTanah, setLuasTanah] = useState("");
    const [luasBangunan, setLuasBangunan] = useState("");
    const [dayaListrik, setDayaListrik] = useState("");
    const [totalBedroom, setBedroom] = useState("");
    const [totalBathroom, setBathroom] = useState("");
    const [instalment, setInstalment] = useState("");
    let [longitude, setLongitude] = useState("")
    console.log("longitude: ", longitude);
    let [latitude, setLatitude] = useState("")
    console.log("latitude: ", latitude);

    const mapContainerRef = useRef(null);
    const [lng, setLng] = useState(106.82713133932072);
    const [lat, setLat] = useState(-6.1752110636303605);
    const [zoom, setZoom] = useState(9.5);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        let geocoder;
        map.addControl(
            (geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
            }))
        );
        geocoder.on("result", function (e) {
            setLongitude(e.result.center[0]) 
            setLatitude(e.result.center[1])
            // console.log(longitude, latitude);
        });
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        let locateUser;
        map.addControl(
            (locateUser = new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
                showUserHeading: true,
                showUserLocation: true,
            }))
        );
        locateUser.on("geolocate", function (e) {
          // setLongitude = e.coords.longitude;
          // setLatitude = e.coords.latitude;
          setLongitude(e.coords.longitude) 
            setLatitude(e.coords.latitude)
            // console.log(longitude, latitude, "ini locate user");
        });
        map.on("move", () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });
        return () => map.remove();
    }, []);

    const inputImage = (e) => {
        const name = e.target.files;
        setImage(name);
    };

    const submit = (e) => {
        e.preventDefault();
        const addHouse = {
          title,
          price,
          location,
          description,
          instalment,
            Specifications: {
                luasTanah,
                luasBangunan,
                totalBedroom,
                totalBathroom,
                dayaListrik,
                certificate,
            },
            Images: image,
            longitude,
            latitude,
          };
          console.log("addHouse: ", addHouse);

        let file = new FormData();
        for (let i = 0; i < addHouse.Images.length; i++) {
            file.append("Images", addHouse.Images[i]);
            console.log(file);
        }

        file.append("title", addHouse.title);
        file.append("price", addHouse.price);
        file.append("location", addHouse.location);
        file.append("Specifications", addHouse.Specifications);
        file.append("description", addHouse.description);
        // file.append("luasTanah", addHouse.Specifications.luasTanah);
        // file.append("luasBangunan", addHouse.Specifications.luasBangunan);
        // file.append("dayaListrik", addHouse.Specifications.dayaListrik);
        // file.append("totalBedroom", addHouse.Specifications.bedroom);
        // file.append("totalBathroom", addHouse.Specifications.bathroom);
        file.append("instalment", addHouse.instalment);
        file.append("longitude", addHouse.longitude);
        file.append("latitude", addHouse.latitude);

        const { data } = axios({
            method: "POST",
            url: "http://localhost:3001/houses",
            data: file,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("ERROR");
                }
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

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
                    <p className="text-xl font-bold tracking-wide mb-4">
                        Add New Asset
                    </p>
                    <div className="mx-10">
                        <form onSubmit={submit}>
                            {/* first field */}
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col text-left w-full">
                                    <label className="mb-2 font-bold">
                                        Title
                                    </label>
                                    <input
                                        name="title"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setTitle(value);
                                        }}
                                        value={title}
                                        type="text"
                                        className="py-2 px-4 rounded-lg shadow"
                                        placeholder="e.g. Dijual rumah mewah dekat jalan M. H. Thamrin"
                                    ></input>
                                </div>
                            </div>
                            {/* second field */}
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col text-left w-1/3 mr-3">
                                    <label className="mb-2 font-bold">
                                        Price
                                    </label>
                                    <input
                                        name="price"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setPrice(value);
                                        }}
                                        value={price}
                                        type="number"
                                        className="py-2 px-4 rounded-lg shadow"
                                        placeholder="e.g. 200000000"
                                    ></input>
                                </div>
                                <div className="flex flex-col text-left w-1/3 mr-3">
                                    <label className="mb-2 font-bold">
                                        Location
                                    </label>
                                    <input
                                        name="location"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setLocation(value);
                                        }}
                                        value={location}
                                        type="text"
                                        className="py-2 px-4 rounded-lg shadow"
                                        placeholder="e.g. Jalan Thamrin, Jakarta"
                                    ></input>
                                </div>
                                <div className="flex flex-col text-left w-1/3 mr-3">
                                    <label className="mb-2 font-bold">
                                        Certificate
                                    </label>
                                    <input
                                        name="certificate"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setCertification(value);
                                        }}
                                        value={certificate}
                                        type="text"
                                        className="py-2 px-4 rounded-lg shadow"
                                        placeholder="e.g. SHM"
                                    ></input>
                                </div>
                            </div>
                            {/* third field */}
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col text-left w-full">
                                    <label className="mb-2 font-bold">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setDescription(value);
                                        }}
                                        value={description}
                                        className="py-2 px-4 h-32 rounded-lg shadow"
                                        placeholder="e.g. Dekat dengan Mall AEON"
                                    ></textarea>
                                </div>
                            </div>
                            {/* fourth field */}
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col text-left w-1/3 mr-3">
                                    <label className="mb-2 font-bold">
                                        Luas Tanah
                                    </label>
                                    <div className="flex flex-row">
                                        <input
                                            name="luasTanah"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setLuasTanah(value);
                                            }}
                                            value={luasTanah}
                                            type="number"
                                            className="py-2 px-4 w-4/5 rounded-lg shadow"
                                            placeholder="e.g. 100"
                                        ></input>
                                        <p className="ml-3 mt-2">M2</p>
                                    </div>
                                </div>
                                <div className="flex flex-col text-left w-1/3 mr-3">
                                    <label className="mb-2 font-bold">
                                        Luas Bangunan
                                    </label>
                                    <div className="flex flex-row">
                                        <input
                                            name="luasBangunan"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setLuasBangunan(value);
                                            }}
                                            value={luasBangunan}
                                            type="number"
                                            className="py-2 px-4 w-4/5 rounded-lg shadow"
                                            placeholder="e.g. 100"
                                        ></input>
                                        <p className="ml-3 mt-2">M2</p>
                                    </div>
                                </div>
                                <div className="flex flex-col text-left w-1/3 mr-3">
                                    <label className="mb-2 font-bold">
                                        Daya Listrik
                                    </label>
                                    <div className="flex flex-row">
                                        <input
                                            name="dataListrik"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setDayaListrik(value);
                                            }}
                                            value={dayaListrik}
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
                                        <label className="mb-2 font-bold">
                                            Bedroom
                                        </label>
                                        <input
                                            name="bedroom"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setBedroom(value);
                                            }}
                                            value={totalBedroom}
                                            type="number"
                                            className="py-2 px-4 rounded-lg shadow"
                                            placeholder="e.g. 3"
                                        ></input>
                                    </div>
                                    <div className="flex flex-col text-left w-1/3 mr-3">
                                        <label className="mb-2 font-bold">
                                            Bathroom
                                        </label>
                                        <input
                                            name="bathroom"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setBathroom(value);
                                            }}
                                            value={totalBathroom}
                                            type="number"
                                            className="py-2 px-4 rounded-lg shadow"
                                            placeholder="e.g. 2"
                                        ></input>
                                    </div>
                                    <div className="flex flex-col text-left w-1/3 mr-3">
                                        <label className="mb-2 font-bold">
                                            Installment
                                        </label>
                                        <select
                                            name="instalment"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setInstalment(value);
                                            }}
                                            type="text"
                                            className="py-2 px-4 rounded-lg shadow"
                                            placeholder="e.g. Jalan Thamrin, Jakarta"
                                        >
                                            <option value="no">No</option>
                                            <option value="yes">Yes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* sixth field */}
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col text-left w-1/3 mx-auto">
                                    <label className="mb-2 font-bold mx-auto">
                                        Photos
                                    </label>
                                    <input
                                        onChange={inputImage}
                                        multiple
                                        type="file"
                                        className="py-2 px-4 rounded-lg shadow bg-white"
                                    ></input>
                                </div>
                            </div>
                            {/* seventh field */}
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col text-left w-full mx-auto">
                                    <label className="mb-2 font-bold mx-auto">
                                        Pin Location
                                    </label>
                                    <div className="bg-white h-48 mx-10 rounded-lg shadow">
                                        <div
                                            className="map-container"
                                            ref={mapContainerRef}
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        />
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
