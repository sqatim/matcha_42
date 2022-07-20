import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "../../pages/Browse/Browse";
import CompleteProfile from "../../pages/CompleteProfile/CompleteProfile";
import Friends from "../../pages/Friends/Friends";
import Layout from "../../pages/Layout/Layout";
import Login from "../../pages/Login/Login";
import Messages from "../../pages/Messages/Messages";
import Profile from "../../pages/Profile/Profile";

// const Logged = () => {
//     const user = useSelector(state => state.user);
//     if(!user.Logged)
//       return
// };
export default function Routing() {
  return (
    <Router>
      <Routes>
        {/* <Route element={<Logged />}> */}
        <Route path="/" element={<Login />} />
        <Route path="completeProfile" element={<CompleteProfile />} />
        {/* </Route> */}
        <Route element={<Layout />}>
          <Route path="browse" element={<Browse />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
  );
}
