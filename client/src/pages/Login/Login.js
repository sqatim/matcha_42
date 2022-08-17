import React, { useEffect, useRef, useState } from "react";
import { ContainerStyle, LeftStyle, RightStyle } from "./Login.style";
import LoginForm from "../../components/LoginForm/LoginForm";
import Image from "../../assets/icons/LoginPage/Image.svg";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../state/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const { status, username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage?.getItem("token")) {
      dispatch(postLogin({ request: "Get" }));
    } else setLoader(false);
    console.log(status);
  }, []);
  useEffect(() => {
    if (status && status == "success") {
      navigate(`/Profile/${username}`, { replace: true });
    }
  }, [status]);
  return (
    <ContainerStyle>
      {!loader && (
        <>
          <LeftStyle>
            <LoginForm />
          </LeftStyle>
          <RightStyle>
            <img src={Image} alt="" />
          </RightStyle>
        </>
      )}
    </ContainerStyle>
  );
}
