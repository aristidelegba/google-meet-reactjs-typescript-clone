import React from "react";
import { Toolsbar, WorkGround } from ".";
const MeetingScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="grow">
        <WorkGround />
      </div>

      <Toolsbar />
    </div>
  );
};

export default MeetingScreen;
