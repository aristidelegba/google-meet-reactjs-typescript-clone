import React from "react";
import styled from "styled-components";
import AvatarWidget from "./AvatarWidget"

const ParticipantCardUiContainer = styled.div`

`;

const ParticipantCard = ({user}) => {
  return (
    <ParticipantCardUiContainer>
      <div className="inner">
        <div className="avatar">
          <AvatarWidget user={user ||{firstname:"John Doe"}}/>
        </div>
      </div>
    </ParticipantCardUiContainer>
  );
};

export default ParticipantCard;
