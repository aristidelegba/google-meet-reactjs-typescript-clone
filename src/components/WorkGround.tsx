import React, { useState } from "react";
import styled from "styled-components";
import ParticipantCard from "./ParticipantCard/ParticipantCard";

const WorkGroundUiContainer = styled.div`
  background-color: #202124;
`;
const WorkGround = () => {
  const initial = new Array(2).fill({username:"John"}) 
  const [participants, setParticipants] = useState<any[]>(initial);
  return (
    <WorkGroundUiContainer className="h-full w-full">
      {participants.map((participant, index) => (
        <ParticipantCard key={index} user={participant} />
      ))}
    </WorkGroundUiContainer>
  );
};

export default WorkGround;
