import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AvatarModal from "../../components/AvatarModal";
import { dispatchData } from "../../components/LoginForm/LoginForm";
import ConversationsBarSearch from "../../components/Messages/ConversationsBarSearch";
import MessagesBar from "../../components/MessagesBar/MessagesBar";
import DescriptionBar from "../../components/Nedded/DescriptionBar";
import { notificationEvent} from "../../components/Notifications/notificationEvent";
import SideBar from "../../components/SideBar/SideBar";
import { startConnecting } from "../../state/userSlice";
import Login from "../Login/Login";
import { LayoutStyle } from "./Layout.style";

export default function Layout({ name, setName, children }) {
  const user = useSelector((state) => state.user);
  // const [name, setName] = useState("Profile");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user.logged) {
      axios
        .get("http://localhost:3001/profile/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((value) => {
          dispatchData(dispatch, value.data, navigate);
          setLoading(false);
        })
        .catch(() => navigate("/", { replace: true }));
    } else setLoading(false);
  }, []);
  useEffect(() => {
    if (user.id) {
      dispatch(startConnecting(user.id));
    }
  }, [user.id]);
  useEffect(() => {
    if (user.notification) {
      console.log(user.notification);
      notificationEvent({
        username: user.notification.username,
        type: user.notification.type,
      }, navigate);
    }
  }, [user.notification]);
  if (!loading && !user.logged) return <Login />;
  return !loading ? (
    <LayoutStyle>
      <SideBar name={name} setName={setName} />
      {user.firstTimeLogged ? (
        <AvatarModal />
      ) : (
        <div className="Layout__Content">
          <DescriptionBar name={name} />
          <Outlet />
        </div>
      )}
      {name != "Messages" ? <MessagesBar /> : <ConversationsBarSearch />}
    </LayoutStyle>
  ) : (
    <></>
  );
}
