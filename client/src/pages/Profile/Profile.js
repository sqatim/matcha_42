import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileBar from "../../components/Profile/ProfileBar";
import ProfileGalery from "../../components/Profile/ProfileGalery";
import ProfileInformation from "../../components/Profile/ProfileInformation";
import ProfileMap from "../../components/Profile/ProfileMap";
import { URL } from "../../utils/fetchData";
import { ProfileStyle } from "./Profile.style";

const ProfileContent = ({ choice, otherUser, userData }) => {
  switch (choice) {
    case "Details":
      return <ProfileInformation otherUser={otherUser} userData={userData} />;
    case "Galery":
      return <ProfileGalery otherUser={otherUser} userData={userData} />;
    case "Map":
      return <ProfileMap otherUser={otherUser} userData={userData} />;
  }
};

export default function Profile({setName}) {
  const [choice, setChoise] = useState("Details");
  const [otherUser, setOtherUser] = useState(null);
  const { username } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    setName("Profile");
  }, []);
  useEffect(() => {
    if (id && id != username) {
      axios
        .get(`${URL}/profile/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(({ data }) => {
          setUserData({ ...data });
          setOtherUser(id);
        });
    } else {
      setOtherUser(id);
      setUserData({});
    }
    setChoise("Details");
  }, [id]);
  return (
    <ProfileStyle>
      {otherUser && (
        <ProfileBar
          choice={choice}
          setChoise={setChoise}
          otherUser={otherUser}
          username={username}
        />
      )}
      {otherUser && (
        <ProfileContent
          choice={choice}
          otherUser={otherUser}
          userData={userData}
        />
      )}
    </ProfileStyle>
  );
}
