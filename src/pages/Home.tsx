import React, { useState } from "react";
import {
  MdInfoOutline,
  MdOutlineChat,
  MdPeopleAlt,
  MdApps,
  MdKeyboard,
} from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { InputAdornment, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

const HomePageUiContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  .header {
    /* height: 50px; */
    padding: 15px 20px;
    .right-items {
      button {
        padding: 10px;
        border-radius: 100px;
        font-size: 25px;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  .body {
    padding: 15px 20px;
    h1 {
      font-family: "Google Sans Display", Roboto, Arial, sans-serif;
      font-size: 2.75rem;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 3.25rem;
      padding-bottom: 0.5em;
    }
    p {
      font-family: "Google Sans", Roboto, Arial, sans-serif;
      font-size: 1.125rem;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.5rem;
      color: #5f6368;
      color: var(--gm-color-caption, #5f6368);
      max-width: 30rem;
      padding-bottom: 3em;
    }
  }
`;

const TodayDate = () => {
  const time = new Date().toLocaleTimeString();
  const dateOptions: any = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString(undefined, dateOptions);
  return (
    <div className="flex gap-2 h-full items-center justify-center">
      <div className="h-full flex items-center justify-center "> {time}</div>
      <span className="h-full flex items-center justify-center font-bold">
        •
      </span>
      <div className="h-full flex items-center justify-center ">{date}</div>
    </div>
  );
};

const MeetingCodeForm = () => {
  const [meetingCode, setMeetingCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (e: any) => {
    setMeetingCode(e.target.value);
  };
  const onFocusChange = () => {
    setIsFocused((oldVal) => !oldVal);
  };
  const handleSubmit = () => {
    console.log(meetingCode);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <TextField
        size="small"
        id="input-with-textfield"
        variant="outlined"
        value={meetingCode}
        onChange={handleChange}
        onFocus={onFocusChange}
        onBlur={onFocusChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdKeyboard />
            </InputAdornment>
          ),
        }}
      />
      {(isFocused || meetingCode) && (
        <Button disabled={!meetingCode}>Participer</Button>
      )}
    </form>
  );
};

const Home = () => {
  return (
    <HomePageUiContainer>
      <div className="header flex">
        <div className="logo flex items-center justify-center w-auto">
          <img
            src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
            alt="logo"
          />
          <div className="ml-3">Meet</div>
        </div>
        <div className="right-items grow flex item-center justify-end gap-4">
          <div className="flex item-center gap-2">
            <TodayDate />
            <div className="flex item-center ">
              <button>
                <MdInfoOutline />
              </button>
              <button>
                <MdPeopleAlt />
              </button>
              <button>
                <MdOutlineChat />
              </button>
            </div>
          </div>
          <div>
            <button>
              <MdApps />
            </button>
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-2 mt-4">
        <div className="first-block pl-8 pr-12">
          <h1 className="mb-2">
            La visioconférence haute qualité, maintenant disponible pour tous
          </h1>
          <p>
            Nous avons adapté Google Meet, notre service de visioconférence
            professionnel sécurisé, afin de le rendre disponible pour tous.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button variant="contained" startIcon={<RiVideoAddLine />}>
              Nouvelle Reunion
            </Button>
            <MeetingCodeForm />
            <Divider />
          </div>
        </div>
        <div className="carousel "></div>
      </div>
    </HomePageUiContainer>
  );
};

export default Home;
