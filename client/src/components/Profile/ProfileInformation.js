import React from "react";
import {
  ProfileContentStyle,
  ProfileInormationBiographyStyle,
  ProfileInformationDetailsStyle,
  ProfileInformationInterestsStyle,
} from "./ProfileContent.style";

const tags = ["E_sport", "Football", "Books", "Travel", "Stroll"];

export default function ProfileInformation() {
  return (
    <ProfileContentStyle>
      <ProfileInformationDetailsStyle>
        <img
          src="/picture1.jpeg"
          width={230}
          height={230}
          className="profileInformation__avatar"
        />
        <div className="details">
          <div className="details__info">
            <p>Usename</p>
            <p>Kat</p>
          </div>
          <div className="details__info">
            <p>Full Name</p>
            <p>Katarina Wae</p>
          </div>
          <div className="details__info">
            <p>Gender</p>
            <p>Female</p>
          </div>
          <div className="details__info">
            <p>Age</p>
            <p>24 ans</p>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five
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
