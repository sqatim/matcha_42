import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyConversations,
  resetMessages,
  setActive,
  setActiveConversation,
} from "../../state/messagesSlice";
import ContactContainer from "./ContactContainer";
import Conversation from "./ConversationBar";
import { MessagesBarStyle } from "./Styles/MessagesBar.style";

export default function MessagesBar() {
  const { active, activeConversation, friendUsername, conversation, conversations } =
    useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyConversations());
  }, []);
  return (
    <MessagesBarStyle active={active}>
      <div
        className="messagesBar__header"
        onClick={() => {
          dispatch(setActive(!active));
        }}
      >
        {!activeConversation ? (
          <p>Messages</p>
        ) : (
          <div className="messageBar__username">
            <i
              className="fi fi-br-arrow-left"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(resetMessages());
                dispatch(setActiveConversation({ active: false }));
              }}
            ></i>
            <p>{friendUsername}</p>
          </div>
        )}
        {active ? (
          <i className="fi fi-sr-caret-down"></i>
        ) : (
          <i className="fi fi-sr-caret-up"></i>
        )}
      </div>
      {!activeConversation ? conversations &&  <ContactContainer /> : conversation._id && <Conversation />}
    </MessagesBarStyle>
  );
}
