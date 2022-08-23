import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { findMyConversations } from "../../utils/fetchData";
import Contact from "./Contact";
import { ContactContainerBarStyle } from "./Styles/MessagesBar.style";

export default function ContactContainer() {
  const { conversations } = useSelector((state) => state.messages);

  // useEffect(() => {
  //   console.log("just test:", conversations);
  // }, [conversations]);
  return (
    <ContactContainerBarStyle>
      {conversations && conversations.map((element, key) =>
        element.messages.length > 0 ? (
          <Contact conversation={element} key={key} />
        ) : null
      )}
    </ContactContainerBarStyle>
  );
}
