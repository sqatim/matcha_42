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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../state/userSlice";

const list = [
  { icon: BrowseSvg, text: "Browse", path: "/browse" },
  { icon: FriendsSvg, text: "Friends", path: "/friends" },
  { icon: MessagesSvg, text: "Messages", path: "/messages" },
  { icon: NotificationsSvg, text: "Notifications", path: "/notifications" },
];

export default function SideBar({ name, setName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, avatar } = useSelector((state) => state.user);
  return (
    <SideBarStyle>
      <img className="matchaLogo" src={Logo} alt="logo" width={200} />
      <InfoStyle
        onClick={() => {
          setName("Profile");
          navigate(`/profile/${username}`, { replace: true });
        }}
      >
        <img src={avatar} alt="" />
        <p>{username}</p>
      </InfoStyle>
      <SideBarListStyle name={name}>
        {list.map((element, key) => (
          <ItemListStyle
            key={key}
            check={name == element.text}
            onClick={() => {
              setName(element.text);
              navigate(element.path, { replace: true });
            }}
          >
            <element.icon check={name == element.text} />
            <p>{element.text}</p>
          </ItemListStyle>
        ))}
      </SideBarListStyle>
      <hr />
      <LogOutStyle
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(resetUser());
          navigate("/", { replace: true });
        }}
      >
        <LogoutSvg />
        <p>Logout</p>
      </LogOutStyle>
    </SideBarStyle>
  );
}
