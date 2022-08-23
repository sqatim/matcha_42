import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getLastMessage } from "../../utils/functions";
import { format } from "timeago.js";
import {
  getConversationWithMyFriend,
  setActiveConversation,
} from "../../state/messagesSlice";

import { ContactStyle } from "./Styles/Messages.style";
import Avatar from "./Avatar";

export default function Contact({ conversation }) {
  const { id, username } = useSelector((state) => state.user);
  const { friendUsername } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [friend, setFriend] = useState({});
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (conversation.members[0].username == username) {
      setFriend(conversation.members[1]);
    } else setFriend(conversation.members[0]);
    setMessages(conversation.messages);
  }, [conversation]);
  return (
    <ContactStyle
      onClick={() => {
        dispatch(
          setActiveConversation({
            id: friend._id,
            active: true,
            friendUsername: friend.username,
            friendAvatar: friend.avatar,
            check: friendUsername == friend.username ? true : false,
          })
        );
        // dispatch(setConversation({...conversation}));
        dispatch(getConversationWithMyFriend(friend._id));
      }}
    >
      <div className="leftSide">
        <Avatar status="Online" avatar={friend.avatar} />
        {messages.length > 0 && (
          <div className="contact__content">
            <p className="contact__content_username">{friend.username}</p>
            <p className="contact__content_lastMessage">
              {getLastMessage(
                id == messages[0].sender ? true : false,
                messages[0].text
              )}
            </p>
          </div>
        )}
      </div>
      {messages.length > 0 && (
        <p className="contact__content_time">{format(messages[0].createdAt)}</p>
      )}
    </ContactStyle>
  );
}
