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

import axios from "axios";
import { dispatchData } from "../LoginForm/LoginForm";
import { resetUser } from "../../state/userSlice";

const verifyCompeteProfile = (data, dispatch) => {
  if (!data.gender || !data.lookingFor || !data.tags.length) {
    dispatch(dataMissingTrue());
    return 0;
  }
  dispatch(dataMissingFalse());
  return 1;
};

const handleNext = (
  step,
  setStep,
  dispatch,
  completeProfile,
  photos,
  navigate
) => {
  let check = 1;
  if (step == 0) {
    check = verifyCompeteProfile(completeProfile, dispatch);
  } else if (step == 1) {
    if (!photos.length || !photos.length > 5) {
      dispatch(dataMissingTrue());
      check = 0;
    } else dispatch(dataMissingFalse());
  }
  if (check && step < 2) setStep(step + 1);
  if (step == 2) {
    // console.log("position: ", completeProfile.position);
    let formData = new FormData();
    photos.map((element) => formData.append("file", element));
    formData.append("gender", completeProfile.gender);
    formData.append("lookingFor", completeProfile.lookingFor);
    completeProfile.tags.map((element) => formData.append("tags", element));
    formData.append("biography", completeProfile.biography);
    // formData.append("position", completeProfile.position);
    console.log(completeProfile.tags);
    if (completeProfile.position == null) {
      axios
        .get("https://ipinfo.io/105.154.1.237?token=f5a7b56f410145")
        .then((value) => {
          console.log("jerreura khayba");
          const pos = value.data.loc.split(",");
          pos.map((element) =>
            formData.append("position", parseFloat(element))
          );
          axios
            .post("http://localhost:3001/profile/completeProfile", formData, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((value) => {
              console.log("wa samir");
              console.log(value.data);
              dispatchData(dispatch, value.data, navigate);
              navigate("/Profile", { replace: true });
            });
        })
        .catch(() => console.log("jerreura"));
    } else {
      formData.append("position", completeProfile.position);
      formData.append("positionSelected", true);
      axios
        .post("http://localhost:3001/profile/completeProfile", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((value) => {
          console.log(value.data);
          dispatchData(dispatch, value.data, navigate);
          navigate("/Profile", { replace: true });
        });
    }
  }
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
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (step) setDisable(false);
    else setDisable(true);
    if (step > 1) setDone(true);
    else setDone(false);
  }, [step]);

  return (
    <ContainerStyle>
      <img className="logo" src={Logo} />
      <div
        className="logOut"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(resetUser());
          navigate("/", { replace: true });
        }}
      >
        <img src={LogoutIcon} />
        <p className="logOut_text">LOGOUT</p>
      </div>
      <CustomizedSteppers step={step} />
      <Content step={step} photos={photos} setPhotos={setPhotos} />
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
          onClick={() =>
            handleNext(
              step,
              setStep,
              dispatch,
              completeProfile,
              photos,
              navigate
            )
          }
        >
          {!done ? "Next" : "Submit"}
        </button>
      </div>
    </ContainerStyle>
  );
}
