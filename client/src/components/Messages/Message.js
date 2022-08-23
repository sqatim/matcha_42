import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MessageStyle } from "./Styles/Messages.style";
import Avatar from "./Avatar";

export default function Message({ element }) {
  const { username } = useSelector((state) => state.user);

  return (
    <MessageStyle sender={element.sender.username == username}>
      {element.sender.username == username ? (
        <div className="myMessage rightAvatar">
          <div className="myMessage__text">
            <p>{element.text}</p>
          </div>
          <Avatar avatar={element.sender.avatar} />
        </div>
      ) : (
        <div className="friendMessage leftAvatar">
          <Avatar avatar={element.sender.avatar} />
          <div className="friendMessage__text">
            <p>{element.text}</p>
          </div>
        </div>
      )}
    </MessageStyle>
  );
}
