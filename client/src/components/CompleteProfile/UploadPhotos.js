import React, { useRef } from "react";
import { AddPhotoStyle, UploadPhotosStyle } from "./Content.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";
import CancelIcon from "../../assets/icons/CompleteProfile/CancelIcon.svg";

import { useDispatch, useSelector } from "react-redux";
import { addPhoto, removePhoto } from "../../state/completeProfileSlice";
import axios from "axios";

const handleClick = (event, photos, setPhotos) => {
  const files = event.target.files;
    Object.keys(files).map((key, index) => {
      setPhotos(current => [...current, files[key]]);
    });
};

export default function UploadPhotos({ photos, setPhotos }) {
  const { dataMissing } = useSelector((state) => state.completeProfile);
  const dispatch = useDispatch();
  const container = useRef();
  return (
    <UploadPhotosStyle ref={container}>
      {photos.map((element, key) => (
        <div key={key} className="uploadPhotos__images">
          <img
            className="uploadPhotos__images_cancel"
            src={CancelIcon}
            onClick={() => dispatch(removePhoto(element))}
          />
          <img className="uploadPhotos__images_photo" src={element} />
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
          type="file"
          name="file"
          id="file"
          multiple
          className="uploadPhotos__input"
          onChange={(event) => {
            handleClick(event, photos, setPhotos);
            // container.current.scrollTop = container.current.scrollHeight;
          }}
        />
      </AddPhotoStyle>
    </UploadPhotosStyle>
  );
}
