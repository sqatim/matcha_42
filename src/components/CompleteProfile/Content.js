import React from "react";
import { ContentStyle } from "./Content.style";
import { Radio } from "antd";
import PersonalInformation from "./PersonalInformation";
import UploadPhotos from "./UploadPhotos";
import Localisation from "./Localisation";

const genderOptions = ["Male", "Female", "Other"];
const lookingForOptions = ["Male", "Female", "Both"];

const onChange1 = ({ target: { value } }) => {
  console.log("radio1 checked", value);
  // setValue1(value);
};

const StepComponent = ({ step }) => {
  switch (step) {
    case 0:
      return <PersonalInformation />;
    case 1:
      return <UploadPhotos />;
    case 2:
      return <Localisation />;
  }
};

export default function Content({ step }) {
  return (
    <ContentStyle>
      <StepComponent step={step} />
      {/* <PersonalInformation /> */}
      {/* <UploadPhotos/> */}
      {/* <Localisation/> */}
    </ContentStyle>
  );
}
