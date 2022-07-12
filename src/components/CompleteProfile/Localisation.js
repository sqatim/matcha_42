import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { LocalisationStyle } from "./Content.style";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      console.log(e)
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });

  }, [map])

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Localisation() {
  return (
    <LocalisationStyle>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker/>
      </MapContainer>
    </LocalisationStyle>
  );
}
