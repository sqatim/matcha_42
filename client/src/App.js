import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Routing from "./components/Routing/Routing";
import { startConnecting } from "./state/userSlice";

function App() {

  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
