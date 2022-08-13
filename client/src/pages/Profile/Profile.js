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
  const [loading, setLoading] = useState(true);
  switch (choice) {
    case "Details":
      return <ProfileInformation otherUser={otherUser} userData={userData} />;
    case "Galery":
      return <ProfileGalery otherUser={otherUser} userData={userData} />;
    case "Map":
      return <ProfileMap otherUser={otherUser} userData={userData} />;
  }
};

export default function Profile() {
  const [choice, setChoise] = useState("Details");
  const [otherUser, setOtherUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { username } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    if (id && id != username) {
      setOtherUser(id);
      axios
        .get(`${URL}/profile/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(({ data }) => {
          setUserData({ ...data });
          console.log("salam samir");
          setLoading(false);
        });
    } else setLoading(false);
  }, []);
  return (
    <ProfileStyle>
      {!loading && (
        <ProfileBar
          choice={choice}
          setChoise={setChoise}
          otherUser={otherUser}
        />
      )}
      {!loading && (
        <ProfileContent
          choice={choice}
          otherUser={otherUser}
          userData={userData}
        />
      )}
    </ProfileStyle>
  );
}
