import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AddProfilePhotosStyle,
  ProfileContentStyle,
  ProfileGaleryStyle,
} from "./ProfileContent.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";
import Photo from "./Photo";

export default function ProfileGalery() {
  const { photos } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(photos);
  }, []);
  return (
    <ProfileContentStyle>
      <ProfileGaleryStyle>
        {photos.map((element) => (
          <Photo element={element} />
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
                // handleClick(event, setPhotos);
                // container.current.scrollTop = container.current.scrollHeight;
              }}
            />
          </AddProfilePhotosStyle>
        )}
      </ProfileGaleryStyle>
    </ProfileContentStyle>
  );
}
