import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfileContentStyle, ProfileGaleryStyle } from "./ProfileContent.style";

export default function ProfileGalery() {
  const { photos } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(photos);
  }, []);
  return (
    <ProfileContentStyle>
      <ProfileGaleryStyle>
        {photos.map((element) => (
          <div className="photo__card">
            <img src={`http://localhost:3001/upload/${element}`} />
          </div>
        ))}
      </ProfileGaleryStyle>
    </ProfileContentStyle>
  );
}
