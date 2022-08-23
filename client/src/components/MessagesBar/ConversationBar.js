import React, { useEffect, useRef, useState } from "react";
import { ConversationBarStyle } from "./Styles/MessagesBar.style";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessageToConversation,
  setConversationMessages,
  submitMessage,
} from "../../state/messagesSlice";
import Message from "./MessageBar";
import {
  getMessagesOfConversationRequest,
  sendMessageRequest,
} from "../../utils/fetchData";

export default function Conversation() {
  const [message, setMessage] = useState("");
  const useEffectRef = useRef(false);
  const componentRef = useRef(false);
  const dispatch = useDispatch();
  const { friendUsername, friendId, conversation, conversationMessages } =
    useSelector((state) => state.messages);
  const { username, avatar, id } = useSelector((state) => state.user);
  let limit = 10;
  let offset = 0;

  useEffect(() => {
    if (
      conversation.members &&
      (conversation.members[0].username == friendUsername ||
        conversation.members[1].username == friendUsername)
    ) {
      fetchMessages();
    }
  }, [conversation]);

  const fetchMessages = () => {
    if (conversation._id) {
      getMessagesOfConversationRequest(conversation._id, offset, limit).then(
        (value) => {
          dispatch(setConversationMessages(value));
        }
      );
      offset += 10;
    }
  };
  const handleScroll = () => {
    if (
      componentRef.current.scrollHeight + componentRef.current.scrollTop - 1 <=
      componentRef.current.offsetHeight
    ) {
      fetchMessages();
    }
  };
  const sendMessage = () => {
    dispatch(
      addMessageToConversation({
        text: message,
        sender: { username, avatar },
      })
    );
    dispatch(
      submitMessage({
        id: friendId,
        text: message,
        sender: { username, avatar, id },
        conversationId: conversation._id,
      })
    );
    sendMessageRequest(conversation._id, message);
    setMessage("");
  };

  useEffect(() => {
    // if (useEffectRef.current == false) {
    componentRef.current.addEventListener("scroll", handleScroll);
    // }
  }, []);
  return (
    <ConversationBarStyle>
      <div className="Conversation__messages" ref={componentRef}>
        {conversationMessages.length > 0 &&
          conversationMessages.map((element, key) => (
            <Message key={key} element={element} />
          ))}
      </div>
      <div className="Conversation__sendMessage">
        <input
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          placeholder="Type your message ..."
          onKeyDown={(event) => {
            if (event.key == "Enter") sendMessage();
          }}
        />
        <i className="fi fi-sr-interface" onClick={sendMessage}></i>
      </div>
    </ConversationBarStyle>
  );
}
