import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AvatarModal from "../../components/AvatarModal";
import { dispatchData } from "../../components/LoginForm/LoginForm";
import MessagesBar from "../../components/Messages/MessagesBar";
import DescriptionBar from "../../components/Nedded/DescriptionBar";
import SideBar from "../../components/SideBar/SideBar";
import Login from "../Login/Login";
import { LayoutStyle } from "./Layout.style";

export default function Layout({ children }) {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("Profile");
  // const [modal, setModal] = useState("Pr);
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
          // console.log(value.data);
          dispatchData(dispatch, value.data, navigate);
          setLoading(false);
        })
        .catch(() => navigate("/", { replace: true }));
    } else setLoading(false);
  }, []);
  if (!loading && !user.logged) return <Login />;
  return !loading ? (
    <LayoutStyle>
      <SideBar name={name} setName={setName} />
      {/* <AvatarModal/> */}
      {user.firstTimeLogged ? (
      <AvatarModal/>
      ) : (
        <div className="Layout__Content">
          <DescriptionBar name={name} />
          <Outlet />
        </div>
      )}
      <MessagesBar />
    </LayoutStyle>
  ) : (
    <></>
  );
}
