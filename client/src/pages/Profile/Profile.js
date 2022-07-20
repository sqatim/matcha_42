import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessagesBar from "../../components/Messages/MessagesBar";
import ProfileBar from "../../components/Profile/ProfileBar";
import ProfileInformation from "../../components/Profile/ProfileInformation";
import SideBar from "../../components/SideBar/SideBar";
import { ProfileStyle } from "./Profile.style";

const ProfileContent = ({ choice }) => {
  if (choice === "Details") return <ProfileInformation />;
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
