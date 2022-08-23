import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationWithMyFriend,
  setActive,
  setActiveConversation,
} from "../../state/messagesSlice";
import { removeFriendRequest } from "../../utils/fetchData";
import CardAvatar from "./CardAvatar";
import { FriendCardStyle } from "./Styles/FriendCard.style";

export default function FriendCard({
  id,
  firstname,
  lastname,
  username,
  img,
  status,
  setFriends,
  friends,
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
            console.log("friendCard: ", conversation);
            dispatch(getConversationWithMyFriend(id));
          }}
        >
          Contact
        </button>
        <button
          className="FriendCard__buttons_remove"
          onClick={() => {
            removeFriendRequest(id).then(() => {
              const filterData = [...friends].filter(
                (element) => element._id != id
              );
              setFriends([...filterData]);
            });
          }}
        >
          Remove
        </button>
      </div>
    </FriendCardStyle>
  );
}
