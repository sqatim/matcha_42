import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/Messages/Avatar";
import Conversation from "../../components/Messages/Conversation";
import { MessagesStyle } from "./Messages.style";

export default function Messages({ setName }) {
  const { friendUsername, conversation, friendAvatar } = useSelector(
    (state) => state.messages
  );
  useEffect(() => {
    setName("Messages");
  }, []);
  useEffect(() => {
    console.log("friendAvatar:", friendAvatar);
  }, [friendAvatar]);
  return (
    <MessagesStyle>
      {conversation._id && (
        <>
          <div className="messages__header">
            <Avatar avatar={friendAvatar} checkUsername={friendUsername} />
            <p>{friendUsername}</p>
          </div>
          <Conversation />
        </>
      )}
    </MessagesStyle>
  );
}
