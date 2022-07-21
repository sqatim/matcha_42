import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessagesBar from "../../components/Messages/MessagesBar";
import ProfileBar from "../../components/Profile/ProfileBar";
import ProfileGalery from "../../components/Profile/ProfileGalery";
import ProfileInformation from "../../components/Profile/ProfileInformation";
import ProfileMap from "../../components/Profile/ProfileMap";
import SideBar from "../../components/SideBar/SideBar";
import { ProfileStyle } from "./Profile.style";

const ProfileContent = ({ choice }) => {
  switch (choice) {
    case "Details":
      return <ProfileInformation />;
    case "Galery":
      return <ProfileGalery />;
    case "Map":
      return <ProfileMap />;
  }
};

export default function Profile() {
  const [choice, setChoise] = useState("Details");

  return (
    <ProfileStyle>
      <ProfileBar choice={choice} setChoise={setChoise} />
      <ProfileContent choice={choice} />
    </ProfileStyle>
  );
}
