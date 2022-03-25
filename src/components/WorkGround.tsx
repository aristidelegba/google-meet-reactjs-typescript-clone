import React, { useState } from "react";
import styled from "styled-components";
import ParticipantCard from "./ParticipantCard/ParticipantCard";

const WorkGroundUiContainer = styled.div`
  background-color: #202124;
`;
const WorkGround = () => {
  const [participants, setParticipants] = useState<any[]>([{username:"john"}]);
  return (
    <WorkGroundUiContainer className="h-full w-full">
      {participants.map((participant) => (
        <ParticipantCard user={participant} />
      ))}
    </WorkGroundUiContainer>
  );
};

export default WorkGround;
