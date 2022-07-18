import React, { useEffect, useRef, useState } from "react";
import { AddPhotoStyle, UploadPhotosStyle } from "./Content.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";
import CancelIcon from "../../assets/icons/CompleteProfile/CancelIcon.svg";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const handleClick = (event, setPhotos) => {
  const files = event.target.files;
  Object.keys(files).map((key, index) => {
    setPhotos((current) => [...current, files[key]]);
  });
};

const removePhoto = (
  element,
  photos,
  setPhotos,
) => {
  setPhotos((current) => [
    ...current.filter((image) => image.name != element.name),
  ]);
};
export default function UploadPhotos({ photos, setPhotos }) {
  const { dataMissing } = useSelector((state) => state.completeProfile);
  const container = useRef();
  return (
    <UploadPhotosStyle ref={container}>
      {photos.map((element, key) => (
        <div key={key} className="uploadPhotos__images">
          <img
            className="uploadPhotos__images_cancel"
            src={CancelIcon}
            onClick={() =>
              removePhoto(
                element,
                photos,
                setPhotos,
              )
            }
          />
          <img
            className="uploadPhotos__images_photo"
            src={URL.createObjectURL(element)}
          />
        </div>
      ))}
      <AddPhotoStyle
        dataMissing={dataMissing}
        length={photos.length}
        className="uploadPhotos__add"
      >
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
            handleClick(event, setPhotos);
            // container.current.scrollTop = container.current.scrollHeight;
          }}
        />
      </AddPhotoStyle>
    </UploadPhotosStyle>
  );
}
