import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { findMyConversations } from "../../utils/fetchData";
import Contact from "./Contact";
import { ContactContainerStyle } from "./Styles/Contacts.style";

export default function ContactContainer() {
  const { conversations } = useSelector((state) => state.messages);
  useEffect(() => {
    // findMyConversations(setConversations);
  }, []);
  return (
    <ContactContainerStyle>
      {conversations.map((element, key) =>
        element.messages.length > 0 ? (
          <Contact conversation={element} key={key} />
        ) : null
      )}
    </ContactContainerStyle>
  );
}
