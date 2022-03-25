import React from "react";
import { MeetingScreen } from "./components";
import Cookies from "universal-cookie/es6";
import "./App.css";

const App = () => {
  // if (!authToken) return <Auth />;
  return (
    <MeetingScreen/>
  );
};

export default App;
