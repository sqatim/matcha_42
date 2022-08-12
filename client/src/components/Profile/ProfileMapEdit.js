import React from "react";
import { ProfileEditMapStyle } from "./ProfileContent.style";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
} from "react-leaflet";
import GpsIcon from "../../assets/icons/CompleteProfile/GpsIcon.svg";
import GpsOffIcon from "../../assets/icons/CompleteProfile/GpsOffIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  changePositionRequest,
} from "../../state/userSlice";
import { useState } from "react";
import { useEffect } from "react";
import { setStatus} from "../../state/userSlice";


function LocationMarker({
  position,
  setPosition,
  positionSelected,
  setPositionSelected,
}) {
  console.log(positionSelected);
  const map = useMap();

  if (position) {
    map.flyTo(position, map.getZoom(), { animate: true });
  }
  const map1 = useMapEvents({
    click(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng];
      setPositionSelected(true);
      setPosition([...newPosition]);
    },
  });
  return position === null || !positionSelected ? null : (
    <Marker position={position}></Marker>
  );
}

export default function ProfileMapEdit({ setEdit }) {
  const { status } = useSelector((state) => state.user);
  const [position, setPosition] = useState(
    useSelector((state) => state.user.position)
  );
  const [positionSelected, setPositionSelected] = useState(
    useSelector((state) => state.user.positionSelected)
  );

  const dispatch = useDispatch();

  const geolocateClick = () => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const newPosition = [
          location.coords.latitude,
          location.coords.longitude,
        ];
        setPosition(newPosition);
        setPositionSelected(true);
      },
      () => {
        console.log("la mablansh");
      }
    );
  };
  const geolocateOffClick = () => {
    setPosition(null);
    setPositionSelected(false);
  };
  const handleSave = () => {
    dispatch(changePositionRequest({position, positionSelected}));
  };
  useEffect(() => {
    if(status ==='success')
    {
      dispatch(setStatus(null))
      setEdit(false);
    }
  },[status])
  return (
    <ProfileEditMapStyle>
      <MapContainer
        style={{ width: "100%", height: "560px" }}
        center={position ? position : [32.88884919473877, -6.909284591674806]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          positionSelected={positionSelected}
          setPositionSelected={setPositionSelected}
        />
      </MapContainer>
      <div className="map__buttons">
        <div className="map__geolocate" onClick={geolocateClick}>
          <img src={GpsIcon} alt="GPS icon"/>
        </div>
        <div className="map__geolocate_off" onClick={geolocateOffClick}>
          <img src={GpsOffIcon} alt="GPSOFF icon"/>
        </div>
      </div>

      <div className="profileMapEdit__saveButton">
        <button
          className="profileMapEdit__saveButton_cancel"
          onClick={() => setEdit(false)}
        >
          Cancel
        </button>
        <button
          className="profileMapEdit__saveButton_save"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </ProfileEditMapStyle>
  );
}
