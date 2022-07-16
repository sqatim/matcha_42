import React, { useEffect, useState } from "react";
import { LoginFormStyle } from "./LoginForm.style";
import Logo from "../../assets/Logo.svg";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import Google from "../../assets/icons/LoginPage/Google.svg";
import Intra from "../../assets/icons/LoginPage/Intra.svg";
import RegisterModal from "./RegisterModal";
import RecoverModal from "./RecoverModal";
import { Bars } from "react-loader-spinner";

const handleSubmit = (event, setLoading) => {
  event.preventDefault();
  setLoading(true);
};
export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wrongDetails, setWrongDetails] = useState(false);
  const [type, setType] = useState("password");
  const changeVisible = () => {
    if (!visible) setType("text");
    else setType("password");
    setVisible(!visible);
  };
  
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
            required
          />
        </div>
        <div className="loginForm__Form_input">
          <input type={type} placeholder="Password" required />
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
      {wrongDetails && (
        <p className="loginForm__wrongDetails">
          The username entered does not belong to any account. Please check it
          and try again.
        </p>
      )}
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
