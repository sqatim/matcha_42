import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  return (
    <Router>
      <Routes>
        {/* <Route element={<Logged />}> */}
        <Route key={7}path="/" element={<Login />} />
        <Route key={0}path="completeProfile" element={<CompleteProfile />} />
        {/* </Route> */}
        <Route key={9}element={<Layout />}>
          <Route key={1} path="browse" element={<Browse />} />
          <Route key={2} path="friends" element={<Friends />} />
          <Route key={3} path="profile" element={<Profile />} />
          <Route key={4} path="profile/:id" element={<Profile />}/>
          <Route key={5} path="messages" element={<Messages />} />
          <Route key={6} path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
}
