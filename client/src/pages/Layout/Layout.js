import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { dispatchData } from "../../components/LoginForm/LoginForm";
import MessagesBar from "../../components/Messages/MessagesBar";
import DescriptionBar from "../../components/Nedded/DescriptionBar";
import SideBar from "../../components/SideBar/SideBar";
import Login from "../Login/Login";
import { LayoutStyle } from "./Layout.style";

export default function Layout({ children }) {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("Profile");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
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
          console.log(value.data);
          dispatchData(dispatch, value.data, navigate);
          setLoading(false);
        });
    } else setLoading(false);
  }, []);
  if (!loading && !user.logged) return <Login />;
  return !loading ? (
    <LayoutStyle>
      <SideBar name={name} setName={setName} />
      <div className="Layout__Content">
        <DescriptionBar name={name} />
        <Outlet />
      </div>
      <MessagesBar />
    </LayoutStyle>
  ) : (
    <></>
  );
}
