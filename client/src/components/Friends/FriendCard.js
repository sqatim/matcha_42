import React from "react";
import CardAvatar from "./CardAvatar";
import { FriendCardStyle } from "./Styles/FriendCard.style";


export default function FriendCard({firstname, lastname, username, img, status}) {
  return (
    <FriendCardStyle>
      <CardAvatar img={img} status={status}/>
      <div className="FriendCard__information">
        <p className="FriendCard__information_fullname">{firstname} {lastname}</p>
        <p className="FriendCard__information_username">{username}</p>
      </div>
      <div className="FriendCard__buttons">
        <button className="FriendCard__buttons_contact">Contact</button>
        <button className="FriendCard__buttons_remove">Remove</button>
      </div>
    </FriendCardStyle>
  );
}
