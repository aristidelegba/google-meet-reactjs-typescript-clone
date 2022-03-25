import React from "react";
import {
  MdInfo,
  MdInfoOutline,
  MdOutlineChat,
  MdPeopleAlt,
  MdWorkspacesOutline,
} from "react-icons/md";
import styled from "styled-components";

const RightBoxUiContainer = styled.div`
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
`;
const RightBox = () => {
  return (
    <RightBoxUiContainer className="flex items-center justify-center">
      <button>
        <MdInfoOutline />
      </button>
      <button>
        <MdPeopleAlt />
      </button>
      <button>
        <MdOutlineChat />
      </button>
      <button>
        <MdWorkspacesOutline />
      </button>
      <button>
        <img
          src="https://www.gstatic.com/meet/host_dark_default_24px_a31fe7075f38ed304f0d56353393c9d2.svg"
          alt="Commandes de l'organisateur"
        />
      </button>
    </RightBoxUiContainer>
  );
};

export default RightBox;
