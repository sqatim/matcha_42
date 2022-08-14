import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProfilePhotosStyle,
  ProfileContentStyle,
  ProfileGaleryStyle,
} from "./ProfileContent.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";
import Photo from "./Photo";
import axios from "axios";
import { setPhotos } from "../../state/userSlice";

const handleClick = (event, dispatch) => {
  const files = event.target.files;
  let formData = new FormData();
  Object.keys(files).map((key, index) => {
    formData.append("file", files[key]);
  });
  axios
    .post("http://localhost:3001/profile/me/photos", formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((value) => {
      dispatch(setPhotos(value.data.photos));
    });
};

export default function ProfileGalery({ otherUser, userData }) {
  const { photos, username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <ProfileContentStyle>
      <ProfileGaleryStyle>
        {otherUser != username
          ? userData.photos.map((element, key) => (
              <Photo key={key} element={element} otherUser={otherUser} />
            ))
          : photos.map((element, key) => <Photo key={key} element={element} />)}
        {!otherUser && photos.length < 5 && (
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
                handleClick(event, dispatch);
                // container.current.scrollTop = container.current.scrollHeight;
              }}
            />
          </AddProfilePhotosStyle>
        )}
      </ProfileGaleryStyle>
    </ProfileContentStyle>
  );
}
