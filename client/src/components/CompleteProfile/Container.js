import React, { useEffect, useState } from "react";
import { BackButtonStyle, ContainerStyle } from "./Container.style";
import Logo from "../../assets/Logo.svg";
import CustomizedSteppers from "./Stepper";
import Content from "./Content";
import LogoutIcon from "../../assets/icons/CompleteProfile/LogoutIcon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dataMissingFalse,
  dataMissingTrue,
} from "../../state/completeProfileSlice";


const verifyCompeteProfile = (data, dispatch) => {
  if (!data.gender || !data.lookingFor || !data.tags.length) {
    dispatch(dataMissingTrue());
    return 0;
  }
  dispatch(dataMissingFalse());
  return 1;
};

const handleNext = (step, setStep, dispatch, completeProfile) => {
  let check = 1;
  if (step == 0) {
    check = verifyCompeteProfile(completeProfile, dispatch);
  } else if (step == 1) {
    if (!completeProfile.photos.length || !completeProfile.photos.length > 5) {
      dispatch(dataMissingTrue());
      check = 0;
    }
    else
    dispatch(dataMissingFalse());
  }
  if (check && step < 2) setStep(step + 1);
};

const handleBack = (step, setStep) => {
  setStep(step - 1);
};

export default function Container() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const completeProfile = useSelector((state) => state.completeProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (step) setDisable(false);
    else setDisable(true);
    if (step == 2) setDone(true);
    else setDone(false);
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
          onClick={() => handleNext(step, setStep, dispatch, completeProfile)}
        >
          {!done ? "Next" : "Submit"}
        </button>
      </div>
    </ContainerStyle>
  );
}
