import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ProfileContentStyle,
  ProfileInormationBiographyStyle,
  ProfileInformationDetailsStyle,
  ProfileInformationInterestsStyle,
} from "./ProfileContent.style";

// const tags = ["E_sport", "Football", "Books", "Travel", "Stroll"];

export default function ProfileInformation() {
  const { avatar, firstname, lastname, username, gender, dateOfBirth, tags, biograpy } =
    useSelector((state) => state.user);
  const [age, setAge] = useState("");
  useEffect(() => {
    function getAge(dateString) {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }
    setAge(getAge(dateOfBirth));
  }, []);
  return (
    <ProfileContentStyle>
      <ProfileInformationDetailsStyle>
        <img
          src={avatar}
          width={230}
          height={230}
          className="profileInformation__avatar"
        />
        <div className="details">
          <div className="details__info">
            <p>Usename</p>
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
            <p>5</p>
          </div>
        </div>
      </ProfileInformationDetailsStyle>
      <ProfileInormationBiographyStyle>
        <p className="profileInformation__biography">Biography</p>
        <p className="profileInformation__biography_text">
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five */}
          {biograpy}
        </p>
      </ProfileInormationBiographyStyle>
      <ProfileInformationInterestsStyle>
        <p className="profileInformation__tags">List of interests</p>
        <div className="profileInformation__tags_div">
          {tags.map((element, key) => (
            <p key={key} className="profileInformation__tags_text">
              #{element}
            </p>
          ))}
          <p></p>
        </div>
      </ProfileInformationInterestsStyle>
    </ProfileContentStyle>
  );
}
