import React from "react";
import { ContainerStyle, LeftStyle, RightStyle } from "./Login.style";
import LoginForm from "../../components/LoginForm/LoginForm";
import Image from '../../assets/icons/LoginPage/Image.svg'
export default function Login() {
  return (
    <ContainerStyle>
      <LeftStyle>
        <LoginForm />
      </LeftStyle>
      <RightStyle>
        <img src={Image} alt=''/>
      </RightStyle>
    </ContainerStyle>
  );
}
