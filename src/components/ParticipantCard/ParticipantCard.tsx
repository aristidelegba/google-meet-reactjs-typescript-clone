import React from "react";
import styled from "styled-components";
import { AvatarWidget } from "../";

const ParticipantCardUiContainer = styled.div`
  color: #fff;
  background-color: #36373a;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
        {user?.username}
      </div>
    </ParticipantCardUiContainer>
  );
};

export default ParticipantCard;
