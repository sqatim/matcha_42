import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationWithMyFriend,
  setActive,
  setActiveConversation,
} from "../../state/messagesSlice";
import CardAvatar from "./CardAvatar";
import { FriendCardStyle } from "./Styles/FriendCard.style";

export default function FriendCard({
  id,
  firstname,
  lastname,
  username,
  img,
  status,
}) {
  const { active, conversation } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  return (
    <FriendCardStyle>
      <CardAvatar img={img} status={status} />
      <div className="FriendCard__information">
        <p className="FriendCard__information_fullname">
          {firstname} {lastname}
        </p>
        <p className="FriendCard__information_username">{username}</p>
      </div>
      <div className="FriendCard__buttons">
        <button
          className="FriendCard__buttons_contact"
          onClick={() => {
            dispatch(
              setActiveConversation({
                active: true,
                friendUsername: username,
              })
            );
            console.log("friendCard: ", conversation)
            dispatch(getConversationWithMyFriend(id));
          }}
        >
          Contact
        </button>
        <button className="FriendCard__buttons_remove">Remove</button>
      </div>
    </FriendCardStyle>
  );
}
