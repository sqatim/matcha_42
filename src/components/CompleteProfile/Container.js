import React from "react";
import { ContainerStyle} from "./Container.style";
import Logo from "../../assets/Logo.svg";
import CustomizedSteppers from "./Stepper";
import Content from "./Content";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
export default function Container() {
  return (
    <ContainerStyle>
      <img src={Logo} />
      <CustomizedSteppers />
      <Content />
      <div className="nextStep">
        <button>Back</button>
        <button>Next</button>
      </div>
    </ContainerStyle>
  );
}
