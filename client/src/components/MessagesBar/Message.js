import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MessageAvatar from "./MessageAvatar";
import { MessageStyle } from "./Styles/Message.style";

export default function Message({ element }) {
  const { username } = useSelector((state) => state.user);

  return (
    <MessageStyle sender={element.sender.username == username}>
      {element.sender.username == username ? (
        <div className="myMessage">
          <p>{element.text}</p>
        </div>
      ) : (
        <div className="friendMessage">
          <MessageAvatar avatar={element.sender.avatar} />
          <div className="friendMessage__text">
            <p>{element.text}</p>
          </div>
        </div>
      )}
    </MessageStyle>
  );
}
