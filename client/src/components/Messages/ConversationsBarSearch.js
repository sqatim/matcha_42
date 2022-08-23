import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyConversations } from "../../state/messagesSlice";
import Avatar from "./Avatar";
import Contact from "./Contact";
import ContactContainer from "./ContactContainer";
import { ConversationsBarSearchStyle } from "./Styles/Messages.style";

export default function ConversationsBarSearch() {
  const { username, avatar } = useSelector((state) => state.user);
  const [conversationsState, setConversationsState] = useState("");
  const { conversations } = useSelector((state) => state.messages);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyConversations());
  }, []);
  return (
    <ConversationsBarSearchStyle>
      <div className="conversationBarSearch__header">Users</div>
      <div className="conversationBarSearch__bottom">
        <div className="conversationBarSearch__search">
          <Avatar avatar={avatar} checkUsername={username} />
          <input
            placeholder="Search user"
            value={conversationsState}
            onChange={(event) => setConversationsState(event.target.value)}
          />
        </div>
        {conversations.length > 0 && (
          <ContactContainer conversationsState={conversationsState} />
        )}
      </div>
    </ConversationsBarSearchStyle>
  );
}
