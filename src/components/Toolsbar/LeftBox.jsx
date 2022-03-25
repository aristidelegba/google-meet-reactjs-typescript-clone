import React, {useState} from "react";
import styled from "styled-components";

const LeftBoxUiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
color:white;
.separator{
  font-weight: bold;
  color: #ffffff6c;
}
`;

const LeftBox = () => {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(date.getHours() + ":" + date.getMinutes())
  setInterval(() => {
     setCurrentDate(date.getHours() + ":" + date.getMinutes());
    // console.log(currentDate);
  }, 60 * 1000);

  const meeting_code = "dzt-ghnu-doh";

  return (
    <LeftBoxUiContainer>
      <div className="date">{currentDate}</div>
      <div className="separator">|</div>
      <div className="code">{meeting_code}</div>
    </LeftBoxUiContainer>
  );
};

export default LeftBox;
