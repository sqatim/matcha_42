import React from "react";
import { UploadPhotosStyle } from "./Content.style";
import UploadPhotosIcon from "../../assets/icons/CompleteProfile/UploadPhotosIcon.svg";

import picture1 from "../../assets/pictures/picture1.jpeg";
import picture2 from "../../assets/pictures/picture2.jpeg";
import picture3 from "../../assets/pictures/picture3.jpeg";
import picture4 from "../../assets/pictures/picture4.jpeg";

const handleClick = (event) => {
  console.log(event.target.files[0]);
};

export default function UploadPhotos() {
  const images = [picture1, picture2, picture3, picture4, picture1];
  // const images = [picture1, picture2, picture3];
  return (
    <UploadPhotosStyle>
      {images.map((element) => (
        <div className="uploadPhotos__images">
          <img src={element} />
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
              className="uploadPhotos__input"
              onChange={handleClick}
            /> 
      </div>
    </UploadPhotosStyle>
  );
}
