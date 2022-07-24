import React, { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import { Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { addPosition, removePosition } from "../../state/completeProfileSlice";
import { LocalisationStyle } from "./Content.style";
import GpsIcon from "../../assets/icons/CompleteProfile/GpsIcon.svg";
import GpsOffIcon from "../../assets/icons/CompleteProfile/GpsOffIcon.svg";

function LocationMarker() {
  const dispatch = useDispatch();
  const { position } = useSelector((state) => state.completeProfile);
  console.log(position);
  const map = useMap();

  if (position) {
    map.flyTo(position, map.getZoom(), { animate: true });
  }
  const map1 = useMapEvents({
    click(e) {
      console.log(e.latlng);
      dispatch(addPosition([e.latlng.lat, e.latlng.lng]));
    },
  });
  return position === null ? null : <Marker position={position}></Marker>;
}

export default function Localisation() {
  const { position } = useSelector((state) => state.completeProfile);
  const dispatch = useDispatch();

  const geolocateClick = () => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const newPosition = [
          location.coords.latitude,
          location.coords.longitude,
        ];
        dispatch(addPosition([...newPosition]));
      },
      () => {
        console.log("la mablansh");
      }
    );
  };
  const geolocateOffClick = () => {
    dispatch(removePosition());
    console.log("geolocateOff");
  };
  return (
    <LocalisationStyle>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position ? position : [32.88884919473877, -6.909284591674806]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      <div className="map__buttons">
        <div className="map__geolocate" onClick={geolocateClick}>
          <img src={GpsIcon} />
        </div>
        <div className="map__geolocate_off" onClick={geolocateOffClick}>
          <img src={GpsOffIcon} />
        </div>
      </div>
    </LocalisationStyle>
  );
}
