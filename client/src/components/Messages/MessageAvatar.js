import React from "react";
import styled from "styled-components";

export default function MessageAvatar({ avatar, status }) {
  return (
    <MessageAvatarStyle className="messageBar__avatar">
      <img src={avatar} alt="Message avatar" />
      <MessageAvatarStatusStyle status={status}>
        <div></div>
      </MessageAvatarStatusStyle>
    </MessageAvatarStyle>
  );
}

const MessageAvatarStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* border: 4px solid #000; */
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MessageAvatarStatusStyle = styled.div`
  background-color: #fff;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  right:-2px;
  bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8px;;
  div {
    width: 100%;
    height: 100%;
    background-color: ${({ status }) =>
      status == "Online" ? "#10C538" : "#FF0000"};
    border-radius: 50%;
  }
`;
