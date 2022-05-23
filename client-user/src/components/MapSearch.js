import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import geoJson from "./houses.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const MapSearch = ({ data }) => {
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
    console.log(data);
    data.getHouse.forEach((feature) => {
      let coordinate = [+feature.longitude, +feature.latitude];
      var popup = new mapboxgl.Marker()
        .setLngLat(coordinate)
        .setPopup(
          new mapboxgl.Popup({ offset: 10 }).setHTML(`
        <div className="flex">
          <a href='detail/${feature.id}'> 
            <img src=${feature.Images[0].image} width="75%", height="75%">
            <h4>${feature.title}</h4>
          </a>
        </div>
        `)
        )
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle"></div>
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ width: "50%", height: "100%", position: "absolute" }}
      />
    </div>
  );
};

export default MapSearch;
