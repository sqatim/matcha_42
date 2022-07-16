import React, { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import { Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { addPosition } from "../../state/completeProfileSlice";
import { LocalisationStyle } from "./Content.style";

function LocationMarker() {
  const dispatch = useDispatch();
  const { position } = useSelector((state) => state.completeProfile);
  const map = useMapEvents({
    click(e) {
      console.log(e);
      dispatch(addPosition(e.latlng));
      map.flyTo(e.latlng, map.getZoom())
    },
  });
  useEffect(() => {}, [position]);
  return position === null ? null : (
    <Marker position={position}>
      {/* <Popup>You are here</Popup> */}
    </Marker>
  );
}

export default function Localisation() {
  const { position } = useSelector((state) => state.completeProfile);
  return (
    <LocalisationStyle>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={
          position
            ? [position.lat, position.lng]
            : [32.88884919473877, -6.909284591674806]
        }
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </LocalisationStyle>
  );
}
