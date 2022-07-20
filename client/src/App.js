import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import Login from "./pages/Login/Login";
import CompleteProfile from "./pages/CompleteProfile/CompleteProfile";
import Friends from "./pages/Friends/Friends";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Routing from "./components/Routing/Routing";

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
