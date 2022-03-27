import React from "react";
import { MdMicOff, MdMic } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import { MdVideocamOff, MdVideocam } from "react-icons/md";
import { MdOutlinePresentToAll } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import styled from "styled-components"

const CenterBoxUiContainer = styled.div`
  button {
    padding: 10px;
    border-radius: 100px;
    font-size: 25px; 
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3c4043;
    &.bg-red {
      background-color: red !important;
    }
    &.btn-call {
      width: 56px !important;
    }
    &:hover {
      background: #484c50
    }
  }
`


const CenterBox = () => {
  return (
    <CenterBoxUiContainer
      className={" flex items-center justify-center gap-3"}
    >
      
      <button className="bg-red">
        <MdMicOff />
      </button>
      <button className="bg-red">
        <MdVideocamOff />
      </button>
      <button>
        <MdOutlinePresentToAll />
      </button>
      <button>
        <MdMoreVert />
      </button> 
      <button className="bg-red btn-call">
        <MdCallEnd />
      </button>
    </CenterBoxUiContainer>
  );
};

export default CenterBox;
