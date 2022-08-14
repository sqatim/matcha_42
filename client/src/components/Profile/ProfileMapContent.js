import React from "react";
import { ProfileMapStyle } from "./ProfileContent.style";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function LocationMarker({ otherUser, userData }) {
  const { position, positionSelected, username } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    console.log("map: ", otherUser);
  }, []);

  if (otherUser != username)
    return userData.position === null || !userData.positionSelected ? null : (
      <Marker position={userData.position}></Marker>
    );
  else
    return position === null || !positionSelected ? null : (
      <Marker position={position}></Marker>
    );
}

export default function ProfileMapContent({ otherUser, userData }) {
  const { position, username } = useSelector((state) => state.user);
  return (
    <div className="ProfileContent__content">
      <ProfileMapStyle>
        {otherUser && (
          <MapContainer
            style={{ width: "100%", height: "100%" }}
            center={otherUser != username ? userData.position : position}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker otherUser={otherUser} userData={userData} />
          </MapContainer>
        )}
      </ProfileMapStyle>
    </div>
  );
}
