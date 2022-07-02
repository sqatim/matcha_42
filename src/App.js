import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import Login from "./pages/Login/Login";
import CompleteProfile from "./pages/CompleteProfile/CompleteProfile";
import Friends from "./pages/Friends/Friends";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="browse" element={<Browse />} />
        <Route path="completeProfile" element={<CompleteProfile />} />
        <Route path="friends" element={<Friends />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
