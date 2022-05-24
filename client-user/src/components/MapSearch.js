import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

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
    data.getHouse.forEach((feature, i) => {
      let coordinate = [feature.longitude, feature.latitude];
      new mapboxgl.Marker()
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
    let geocoder;
    map.addControl(
      (geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      }))
    );
    geocoder.on("result", function (e) {
      let longitude = e.result.center[0];
      let latitude = e.result.center[1];
      console.log(longitude, latitude);
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
      let longitude = e.coords.longitude;
      let latitude = e.coords.latitude;
      console.log(longitude, latitude, "ini locate user");
    });
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    return () => map.remove();
  }, []);

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
