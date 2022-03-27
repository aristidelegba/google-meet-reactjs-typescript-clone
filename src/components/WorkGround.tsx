import React, { useState } from "react";
import styled from "styled-components";
import ParticipantCard from "./ParticipantCard/ParticipantCard";

const WorkGroundUiContainer = styled.div`
  background-color: #202124;
  .all-participants{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    gap: 20px;
    /* padding: 20px; */

  }
`;
const WorkGround = () => {
  const initial = new Array(1).fill({username:"John"}) 
  const [participants, setParticipants] = useState<any[]>(initial);
  return (
    <WorkGroundUiContainer className="h-full w-full">
      <div className="all-participants">
         {participants.map((participant, index) => (
        <ParticipantCard key={index} user={participant} />
      ))}
      </div>
    </WorkGroundUiContainer>
  );
};

export default WorkGround;
