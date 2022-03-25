import React from "react";
import styled from "styled-components";
import { AvatarWidget } from "../";

const ParticipantCardUiContainer = styled.div`
  color: #fff;
`;
interface IParticipantCardProps {
  user: any;
}
const ParticipantCard = ({ user }: IParticipantCardProps) => {
  return (
    <ParticipantCardUiContainer>
      <div className="inner">
        <div className="avatar">
          <AvatarWidget
            imageUrl={user?.image || null}
            fullname={user?.username || user?.firstname || "John Doe"}
          />
        </div>
        ahahahhahahah
      </div>
    </ParticipantCardUiContainer>
  );
};

export default ParticipantCard;
