import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AddProfilePhotosStyle,
  ProfileContentStyle,
  ProfileGaleryStyle,
} from "./ProfileContent.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";
import Photo from "./Photo";

const handleClick = (event, setPhotos) => {
  const files = event.target.files;
  Object.keys(files).map((key, index) => {
    // setPhotos((current) => [...current, files[key]]);
    console.log(files[key])
  });
};

export default function ProfileGalery() {
  const { photos } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(photos);
  }, []);
  return (
    <ProfileContentStyle>
      <ProfileGaleryStyle>
        {photos.map((element, key) => (
          <Photo key={key} element={element} />
        ))}
        {photos.length < 5 && (
          <AddProfilePhotosStyle>
            <label htmlFor="file">
              <img src={UploadPhotosIcon} />
              <p>Add photo</p>
            </label>
            <input
              accept="image/*"
              type="file"
              name="file"
              id="file"
              multiple
              className="uploadPhotos__input"
              onChange={(event) => {
                handleClick(event);
                // container.current.scrollTop = container.current.scrollHeight;
              }}
            />
          </AddProfilePhotosStyle>
        )}
      </ProfileGaleryStyle>
    </ProfileContentStyle>
  );
}
