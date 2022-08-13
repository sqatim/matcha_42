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
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  useEffect(() => {
    function getAge(dateString) {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }
    setAge(getAge(otherUser ? userData.dateOfBirth: dateOfBirth));
    console.log("id: ", id);
  }, []);
  return (
    <div className="ProfileContent__content">
      <ProfileInformationDetailsStyle>
        <ProfileAvatar avatar={otherUser ? userData.avatar: avatar} />
        <div className="details">
          <div className="details__info">
            <p>Username</p>
            <p>{otherUser ? userData.username : username}</p>
          </div>
          <div className="details__info">
            <p>Full Name</p>
            <p>
              {otherUser ? userData.firstname : firstname}{" "}
              {otherUser ? userData.lastname : lastname}
            </p>
          </div>
          <div className="details__info">
            <p>Gender</p>
            <p>{otherUser ? userData.gender : gender}</p>
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
              defaultValue={otherUser ? userData.rating : rating}
            />
          </div>
        </div>
      </ProfileInformationDetailsStyle>
      <ProfileInormationBiographyStyle>
        <p className="profileInformation__biography">Biography</p>
        <p className="profileInformation__biography_text">
          {otherUser ? userData.biography : biography}
        </p>
      </ProfileInormationBiographyStyle>
      <ProfileInformationInterestsStyle>
        <p className="profileInformation__tags">List of interests</p>
        <div className="profileInformation__tags_div">
          {otherUser
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
