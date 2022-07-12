import React from "react";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { LocalisationStyle } from "./Content.style";

export default function Localisation() {
  return (
    <LocalisationStyle>
      <MapContainer style={{width: '100%', height: '100%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </LocalisationStyle>
  );
}
