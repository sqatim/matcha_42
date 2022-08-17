import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ProfileInormationBiographyStyle,
  ProfileInformationDetailsStyle,
  ProfileInformationInterestsStyle,
} from "./ProfileContent.style";
import { Rate } from "antd";
import ProfileAvatar from "./ProfileAvatar";

export default function ProfileInformationContent({ otherUser, userData }) {
  const {
    avatar,
    firstname,
    lastname,
    username,
    gender,
    dateOfBirth,
    tags,
    biography,
    rating,
  } = useSelector((state) => state.user);
  const [age, setAge] = useState("");
  useEffect(() => {
    function getAge(dateString) {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }
    setAge(getAge(otherUser != username ? userData.dateOfBirth : dateOfBirth));
  }, []);
  return (
    <div className="ProfileContent__content">
      <ProfileInformationDetailsStyle>
        <ProfileAvatar
          otherUser={otherUser}
          status={userData?.status}
          avatar={otherUser != username ? userData.avatar : avatar}
          username={username}
        />
        <div className="details">
          <div className="details__info">
            <p>Username</p>
            <p>{otherUser == username ? username : userData.username}</p>
          </div>
          <div className="details__info">
            <p>Full Name</p>
            <p>
              {otherUser == username ? firstname : userData.firstname}{" "}
              {otherUser == username ? lastname : userData.lastname}
            </p>
          </div>
          <div className="details__info">
            <p>Gender</p>
            <p>{otherUser == username ? gender : userData.gender}</p>
          </div>
          <div className="details__info">
            <p>Age</p>
            <p>{age} ans</p>
          </div>
          <div className="details__info">
            <p>Rating</p>
            <Rate
              allowHalf
              disabled
              defaultValue={otherUser == username ? rating : userData.rating}
            />
          </div>
        </div>
      </ProfileInformationDetailsStyle>
      <ProfileInormationBiographyStyle>
        <p className="profileInformation__biography">Biography</p>
        <p className="profileInformation__biography_text">
          {otherUser == username ? biography : userData.biography}
        </p>
      </ProfileInormationBiographyStyle>
      <ProfileInformationInterestsStyle>
        <p className="profileInformation__tags">List of interests</p>
        <div className="profileInformation__tags_div">
          {otherUser !== username
            ? userData.tags.map((element, key) => (
                <p key={key} className="profileInformation__tags_text">
                  #{element}
                </p>
              ))
            : tags.map((element, key) => (
                <p key={key} className="profileInformation__tags_text">
                  #{element}
                </p>
              ))}
        </div>
      </ProfileInformationInterestsStyle>
    </div>
  );
}
