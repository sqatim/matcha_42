import React, { useEffect, useState } from "react";
import { BackButtonStyle, ContainerStyle } from "./Container.style";
import Logo from "../../assets/Logo.svg";
import CustomizedSteppers from "./Stepper";
import Content from "./Content";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const handleNext = (step, setStep) => {
  if (step < 2) setStep(step + 1);
};

const handleBack = (step, setStep) => {
  setStep(step - 1);
};
export default function Container() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (step) setDisable(false);
    else setDisable(true);
    if (step == 2) setDone(true);
  }, [step]);

  return (
    <ContainerStyle>
      <img src={Logo} />
      <CustomizedSteppers step={step}/>
      <Content step={step} />
      <div className="nextStep">
        <BackButtonStyle
          disable={disable}
          disabled={disable}
          onClick={() => handleBack(step, setStep)}
        >
          {" "}
          Back
        </BackButtonStyle>
        <button
          className="nextStep__next"
          onClick={() => handleNext(step, setStep)}
        >
          {!done ? "Next" : "Submit"}
        </button>
      </div>
    </ContainerStyle>
  );
}
