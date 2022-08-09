import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { ProfileContentStyle, ProfileMapStyle } from "./ProfileContent.style";
import GpsIcon from "../../assets/icons/CompleteProfile/GpsIcon.svg";
import GpsOffIcon from "../../assets/icons/CompleteProfile/GpsOffIcon.svg";
import { addPosition, setPositionSelected } from "../../state/userSlice";
import { removePosition } from "../../state/completeProfileSlice";
import ProfileMapContent from "./ProfileMapContent";

function LocationMarker() {
  const dispatch = useDispatch();
  const { position, positionSelected } = useSelector((state) => state.user);
  console.log("salam");
  console.log(positionSelected);
  const map = useMap();

  if (position) {
    map.flyTo(position, map.getZoom(), { animate: true });
  }
  const map1 = useMapEvents({
    click(e) {
      console.log(e.latlng);
      dispatch(setPositionSelected(true));
      dispatch(addPosition([e.latlng.lat, e.latlng.lng]));
    },
  });
  return position === null || !positionSelected ? null : (
    <Marker position={position}></Marker>
  );
}

export default function ProfileMap() {
  const { position } = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
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
    dispatch(setPositionSelected(false));
    console.log("geolocateOff");
  };
  return (
    <ProfileContentStyle>
      {!edit && (
        <div className="ProfileContent__edit">
          <div
            className="ProfileContent__edit_child"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            <p>Change Position</p>
            <i className="fi fi-rs-settings"></i>
          </div>
        </div>
      )}
      {/* <div className="ProfileContent__content">
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
        </ProfileMapStyle>
      </div> */}

      {!edit ? <ProfileMapContent /> : null}
    </ProfileContentStyle>
  );
}
