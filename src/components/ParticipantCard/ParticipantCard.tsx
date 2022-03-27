import React from "react";
import {
  MdCloseFullscreen,
  MdGridOff,
  MdOutlineChat,
  MdOutlineGridView,
  MdOutlineRemoveCircleOutline,
  MdPeopleAlt,
  MdPushPin,
} from "react-icons/md";
import { MdMicOff, MdMic } from "react-icons/md";

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
  flex-grow: 1;
  position: relative;

  .icon-mic,
  .username {
    padding: 10px;
    border-radius: 100px;
    font-size: 25px;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: absolute;
  }
  .icon-mic {
    top: 0;
    right: 0;
  }
  .username {
    bottom: 0;
    left: 0;
  }

  &:hover {
    .avatar .actions {
      opacity: 1;
    }
  }
  .avatar {
    position: relative;
    .actions {
      transition: opacity 0.2s ease-in-out 0s;
      opacity: 0;
      height: 150px;
      width: 150px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: #00000061;
      border-radius: 100%;
      button {
        padding: 10px;
        border-radius: 100px;
        font-size: 25px;
        height: 48px;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        &:hover {
          background-color: #292a2d;
        }
      }
    }
  }
`;
interface IParticipantCardProps {
  user: {
    id: string;
    username: string;
    firstname?: string;
    image?: string;
    isInitiator?: boolean;
  };
}

const currentUser: any = {};
const ParticipantCard = ({ user }: IParticipantCardProps) => {
  const isCurrentUser = user.id === currentUser.id;
  return (
    <ParticipantCardUiContainer>
      {" "}
      <div className="icon-mic">
        <MdGridOff />
      </div>
      <div className="avatar flex flex-col items-center justify-center gap-3">
        <div className="actions flex items-center">
          <button>
            <MdPushPin />
          </button>
          {isCurrentUser ? (
            <button>
              {/* <MdGridOff /> */}
              <MdOutlineGridView />
            </button>
          ) : (
            <button>
              <MdMicOff />
            </button>
          )}
          {isCurrentUser ? (
            <button>
              <MdCloseFullscreen />
            </button>
          ) : (
            <button>
              <MdOutlineRemoveCircleOutline />
            </button>
          )}
        </div>
        <AvatarWidget
          imageUrl={user?.image}
          fullname={user?.username || user?.firstname}
        />
      </div>
      <div className="username">{user?.username}</div>
    </ParticipantCardUiContainer>
  );
};

export default ParticipantCard;
