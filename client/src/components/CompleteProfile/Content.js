import React from "react";
import { ContentStyle } from "./Content.style";
import { Radio } from "antd";
import PersonalInformation from "./PersonalInformation";
import UploadPhotos from "./UploadPhotos";
import Localisation from "./Localisation";

const StepComponent = ({ step , photos, setPhotos}) => {
  switch (step) {
    case 0:
      return <PersonalInformation />;
    case 1:
      return <UploadPhotos photos={photos} setPhotos={setPhotos}/>;
    case 2:
      return <Localisation />;
  }
};

export default function Content({ step, photos, setPhotos }) {
  return (
    <ContentStyle>
      <StepComponent step={step} photos={photos} setPhotos={setPhotos}/>
    </ContentStyle>
  );
}
