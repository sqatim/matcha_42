import React from "react";
import { UploadPhotosStyle } from "./Content.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";
import CancelIcon from "../../assets/icons/CompleteProfile/CancelIcon.svg";

import picture1 from "../../assets/pictures/picture1.jpeg";
import picture2 from "../../assets/pictures/picture2.jpeg";
import picture3 from "../../assets/pictures/picture3.jpeg";
import picture4 from "../../assets/pictures/picture4.jpeg";
import { useEffect } from "react";
import { useState } from "react";

const handleClick = (event, images, setImages) => {
  let newImages = [...images];
  const files = event.target.files;
  console.log(files);
  Object.keys(files).map((key, index) => {
    const image = "/" + files[key].name;
    newImages.push(image);
    console.log('salam');
  });
  // console.log(files.length)
  console.log(newImages.length);
  setImages([...newImages]);
};

const handleCancel = (element, setImages, images) => {
  const newImages = images.filter((image) => image != element);
  setImages([...newImages]);
};

export default function UploadPhotos() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    console.log("length: " + images.length);
  }, [images]);
  return (
    <UploadPhotosStyle>
      {images.map((element, key) => (
        <div key={key} className="uploadPhotos__images">
          <img
            className="uploadPhotos__images_cancel"
            src={CancelIcon}
            onClick={() => handleCancel(element, setImages, images)}
          />
          <img className="uploadPhotos__images_photo" src={element} />
        </div>
      ))}
      <div className="uploadPhotos__add">
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
            handleClick(event, images, setImages);
          }}
        />
      </div>
    </UploadPhotosStyle>
  );
}
