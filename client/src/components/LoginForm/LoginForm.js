import React, { useEffect, useState } from "react";
import { LoginFormStyle, NotFoundStyle } from "./LoginForm.style";
import Logo from "../../assets/Logo.svg";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import Google from "../../assets/icons/LoginPage/Google.svg";
import Intra from "../../assets/icons/LoginPage/Intra.svg";
import RegisterModal from "./RegisterModal";
import RecoverModal from "./RecoverModal";
import { Bars } from "react-loader-spinner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addUsername,
  addPassword,
  addEmail,
  addFirstname,
  addLastname,
  addAvatar,
  setTags,
  addGender,
  addLookingFor,
  addDateOfBirth,
  addBiography,
  setPhotos,
  addProfileCompleted,
  userLogged,
  addFirstTimeLogged,
  setPositionSelected,
  postLogin,
  addRating,
  addPosition,
  addId,
} from "../../state/userSlice";

const NotFound = () => {
  return (
    <NotFoundStyle>
      <p className="loginForm__wrongDetails">
        Your search did not return any results. Please try again with other
        information.
      </p>
    </NotFoundStyle>
  );
};

export const dispatchData = (dispatch, data, navigate) => {
  dispatch(addId(data._id));
  dispatch(addEmail(data.email));
  dispatch(addFirstname(data.firstname));
  dispatch(addLastname(data.lastname));
  dispatch(addUsername(data.username));
  dispatch(addDateOfBirth(data.dateOfBirth));
  dispatch(userLogged());
  dispatch(addFirstTimeLogged(data.firstTimeLogged));
  if (data.avatar) dispatch(addAvatar(data.avatar));
  if (!data.profileCompleted) {
    navigate("/completeProfile", { replace: true });
  } else {
    dispatch(addRating(data.rating));
    dispatch(setPositionSelected(data.positionSelected));
    dispatch(addGender(data.gender));
    dispatch(addLookingFor(data.lookingFor));
    dispatch(setTags(data.tags));
    data.biography && dispatch(addBiography(data.biography));
    dispatch(setPhotos(data.photos));
    dispatch(addProfileCompleted(data.profileCompleted));
    dispatch(addPosition(data.position));
    dispatch(setPositionSelected(data.positionSelected));
  }
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const { status, username, password, profileCompleted } = useSelector(
    (state) => state.user
  );
  const user = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wrongDetails, setWrongDetails] = useState(false);
  const [type, setType] = useState("password");
  const navigate = useNavigate();
  const changeVisible = () => {
    if (!visible) setType("text");
    else setType("password");
    setVisible(!visible);
  };

  const handleSubmit = (event, setLoading) => {
    event.preventDefault();
    dispatch(postLogin({ username, password, request: "Post" }));
  };
  useEffect(() => {
    if (status == "pending") setLoading(true);
    else setLoading(false);
    if (status == "success") {
      {
        if (!profileCompleted) navigate("/completeProfile", { replace: true });
        else navigate(`/profile/${username}`, { replace: true });
      }
    }
    if (status == "failed") setWrongDetails(true);
  }, [status]);
  return (
    <LoginFormStyle>
      <img src={Logo} />
      <p className="loginForm__welcome">
        Welcome back!
        <br />
        Please login to your account.
      </p>
      <form onSubmit={(event) => handleSubmit(event, setLoading)}>
        <div className="loginForm__Form_input">
          <input
            className="loginForm__Form_input_text"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              if (wrongDetails) setWrongDetails(false);
              dispatch(addUsername(event.target.value));
            }}
            required
          />
        </div>
        <div className="loginForm__Form_input">
          <input
            type={type}
            placeholder="Password"
            value={password}
            onChange={(event) => {
              if (wrongDetails) setWrongDetails(false);
              dispatch(addPassword(event.target.value));
            }}
            required
          />
          {visible ? (
            <EyeTwoTone onClick={changeVisible} style={{ fontSize: "150%" }} />
          ) : (
            <EyeInvisibleOutlined
              onClick={changeVisible}
              style={{ fontSize: "150%", color: "#D0D0D0" }}
            />
          )}
        </div>
        {!loading ? (
          <input type="submit" value="Login" />
        ) : (
          <Bars height={50} width="100%" color="#0c7fda" />
        )}
      </form>
      <div className="loginForm__other">
        <div>
          <p>Don't have account ?</p>
          <RegisterModal />
        </div>
        <div>
          <p>Forgotten password ?</p>
          <RecoverModal />
        </div>
      </div>
      {wrongDetails && <NotFound />}
      <div className="loginForm__signInWith">
        <hr />
        <p>Sign in with</p>
        <hr />
      </div>
      <div className="loginForm__oauth">
        <button>
          <img src={Intra} alt="" />
          <p className="loginForm__oauth_ intra">Intra</p>
        </button>
        <button>
          <img src={Google} alt="" />
          <p className="loginForm__oauth_ google">Facebook</p>
        </button>
      </div>
      <p className="loginForm__copyright">© 2021 Matcha All Rights Reserved</p>
    </LoginFormStyle>
  );
}
