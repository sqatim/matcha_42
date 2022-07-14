import React, { useEffect, useState } from "react";
import { BackButtonStyle, ContainerStyle } from "./Container.style";
import Logo from "../../assets/Logo.svg";
import CustomizedSteppers from "./Stepper";
import Content from "./Content";
import LogoutIcon from "../../assets/icons/CompleteProfile/LogoutIcon.svg";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const handleNext = (step, setStep) => {
  if (step < 2) setStep(step + 1);
};

const handleBack = (step, setStep) => {
  setStep(step - 1);
};

// const handleLogOut = () => {
//   const navigate = useNavigate();
//   navigate("/", { replace: true });
// };

export default function Container() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (step) setDisable(false);
    else setDisable(true);
    if (step == 2) setDone(true);
  }, [step]);

  return (
    <ContainerStyle>
      <img className="logo" src={Logo} />
      <div className="logOut" onClick={() => navigate("/", { replace: true })}>
        <img src={LogoutIcon} />
        <p className="logOut_text">LOGOUT</p>
      </div>
      <CustomizedSteppers step={step} />
      <Content step={step} />
      <div className="nextStep">
        <BackButtonStyle
          disable={disable}
          disabled={disable}
          onClick={() => handleBack(step, setStep)}
        >
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
