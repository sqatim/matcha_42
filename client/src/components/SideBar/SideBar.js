import React from "react";
import {
  InfoStyle,
  ItemListStyle,
  LogOutStyle,
  SideBarListStyle,
  SideBarStyle,
} from "./SideBar.style";
import Logo from "../../assets/Logo.svg";
import Picture from "../../assets/pictures/picture1.jpeg";
import BrowseSvg from "../Nedded/BrowseSvg";
import FriendsSvg from "../Nedded/FriendsSvg";
import NotificationsSvg from "../Nedded/NotificationsSvg";
import MessagesSvg from "../Nedded/MessagesSvg";
import LogoutSvg from "../Nedded/LogoutSvg";

const list = [
  { icon: BrowseSvg, text: "Browse" },
  { icon: FriendsSvg, text: "Friends" },
  { icon: MessagesSvg, text: "Messages" },
  { icon: NotificationsSvg, text: "Notifications" },
];

export default function SideBar({ name, setName }) {
  return (
    <SideBarStyle>
      <img className="matchaLogo" src={Logo} alt="logo" width={200} />
      <InfoStyle onClick={() => setName("Profile")}>
        <img src={Picture} alt="" />
        <p>Kat</p>
      </InfoStyle>
      <SideBarListStyle name={name}>
        {list.map((element, key) => (
          <ItemListStyle
            key={key}
            check={name == element.text}
            onClick={() => setName(element.text)}
          >
            <element.icon check={name == element.text} />
            <p>{element.text}</p>
          </ItemListStyle>
        ))}
      </SideBarListStyle>
      <hr />
      <LogOutStyle>
        <LogoutSvg />
        <p>Logout</p>
      </LogOutStyle>
    </SideBarStyle>
  );
}
