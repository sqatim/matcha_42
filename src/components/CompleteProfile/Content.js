import React from "react";
import { ContentStyle } from "./Content.style";
import { Radio } from "antd";
import PersonalInformation from "./PersonalInformation";
import UploadPhotos from "./UploadPhotos";

const genderOptions = ["Male", "Female", "Other"];
const lookingForOptions = ["Male", "Female", "Both"];

const onChange1 = ({ target: { value } }) => {
  console.log("radio1 checked", value);
  // setValue1(value);
};


export default function Content() {
  return (
    <ContentStyle>
      {/* <PersonalInformation /> */}
      <UploadPhotos/>
    </ContentStyle>
  );
}
