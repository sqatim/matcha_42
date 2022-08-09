import React from "react";
import { ProfileMapStyle } from "./ProfileContent.style";
import {
    MapContainer,
    TileLayer,
  } from "react-leaflet";

import { useSelector } from "react-redux";

export default function ProfileMapContent() {
  const { position } = useSelector((state) => state.user);

  return (
    <div className="ProfileContent__content">
    <ProfileMapStyle>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={
            position ? position : [32.88884919473877, -6.909284591674806]
          }
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </ProfileMapStyle>
    </div>
  );
}
