import React from "react";
import { MeetingRoom, Home } from "./pages";
import Cookies from "universal-cookie/es6";
import "./App.css";


 

const App = () => {
  // if (!authToken) return <Auth />;
  return (
    <Home/>
    // <MeetingRoom/>
  );
};

export default App;
