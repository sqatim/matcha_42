import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ProfileInormationBiographyStyle,
  ProfileInformationDetailsStyle,
  ProfileInformationInterestsStyle,
} from "./ProfileContent.style";
import { Rate } from 'antd';
import ProfileAvatar from "./ProfileAvatar";


export default function ProfileInformationContent() {
  const {
    avatar,
    firstname,
    lastname,
    username,
    gender,
    dateOfBirth,
    tags,
    biography,
    rating
  } = useSelector((state) => state.user);
  const [age, setAge] = useState("");

  useEffect(() => {
    function getAge(dateString) {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }
    setAge(getAge(dateOfBirth));
  }, []);
  return (
    <div className="ProfileContent__content">
      <ProfileInformationDetailsStyle>
        <ProfileAvatar avatar={avatar}/>
        <div className="details">
          <div className="details__info">
            <p>Username</p>
            <p>{username}</p>
          </div>
          <div className="details__info">
            <p>Full Name</p>
            <p>
              {firstname} {lastname}
            </p>
          </div>
          <div className="details__info">
            <p>Gender</p>
            <p>{gender}</p>
          </div>
          <div className="details__info">
            <p>Age</p>
            <p>{age} ans</p>
          </div>
          <div className="details__info">
            <p>Rating</p>
            <Rate allowHalf disabled  defaultValue={rating} />
          </div>
        </div>
      </ProfileInformationDetailsStyle>
      <ProfileInormationBiographyStyle>
        <p className="profileInformation__biography">Biography</p>
        <p className="profileInformation__biography_text">{biography}</p>
      </ProfileInormationBiographyStyle>
      <ProfileInformationInterestsStyle>
        <p className="profileInformation__tags">List of interests</p>
        <div className="profileInformation__tags_div">
          {tags.map((element, key) => (
            <p key={key} className="profileInformation__tags_text">
              #{element}
            </p>
          ))}
        </div>
      </ProfileInformationInterestsStyle>
    </div>
  );
}
