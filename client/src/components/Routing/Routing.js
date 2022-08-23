import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Browse from "../../pages/Browse/Browse";
import CompleteProfile from "../../pages/CompleteProfile/CompleteProfile";
import Friends from "../../pages/Friends/Friends";
import Layout from "../../pages/Layout/Layout";
import Login from "../../pages/Login/Login";
import Messages from "../../pages/Messages/Messages";
import Notifications from "../../pages/Notifications/Notifications";
import Profile from "../../pages/Profile/Profile";

// const Logged = () => {
//     const user = useSelector(state => state.user);
//     if(!user.Logged)
//       return
// };
export default function Routing() {
  const { username } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  return (
    <Router>
      <Routes>
        {/* <Route element={<Logged />}> */}
        <Route path="/" element={<Login />} />
        <Route path="completeProfile" element={<CompleteProfile />} />
        {/* </Route> */}
        <Route element={<Layout name={name} setName={setName}/>}>
          <Route path="browse" element={<Browse setName={setName}/>} />
          <Route path="friends" element={<Friends setName={setName}/>} />
          <Route  path="profile" element={<Navigate to ={`/profile/${username}`} />} />
          <Route path="profile/:id" element={<Profile setName={setName}/>} />
          <Route path="messages" element={<Messages setName={setName}/>} />
          <Route path="notifications" element={<Notifications setName={setName}/>} />
        </Route>
      </Routes>
    </Router>
  );
}
