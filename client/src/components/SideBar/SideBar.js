import React from "react";
import { InfoStyle, SideBarStyle } from "./SideBar.style";
import Logo from "../../assets/Logo.svg";

export default function SideBar() {
  return (
    <SideBarStyle>
      <img src={Logo} alt="logo" />
      <InfoStyle>
        <img src="" alt=""/>
        <p>Kat</p>
      </InfoStyle>
    </SideBarStyle>
  );
}
