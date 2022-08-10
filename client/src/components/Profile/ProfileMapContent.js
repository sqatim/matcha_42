import React from "react";
import { ProfileMapStyle } from "./ProfileContent.style";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function LocationMarker({}) {
  const { position, positionSelected } = useSelector((state) => state.user);
  console.log(positionSelected);

  return position === null || !positionSelected ? null : (
    <Marker position={position}></Marker>
  );
}

export default function ProfileMapContent() {
  const { position } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(position);
  }, []);
  return (
    <div className="ProfileContent__content">
      <ProfileMapStyle>
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </ProfileMapStyle>
    </div>
  );
}
