import React from "react";
import { ContainerStyle, Content } from "./Container.style";
import Logo from "../../assets/Logo.svg";
import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import CustomizedSteppers from "./Stepper";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
export default function Container() {
  return (
    <ContainerStyle>
      <img src={Logo} />
     <CustomizedSteppers/>
     <Content/>
     
    </ContainerStyle>
  );
}
