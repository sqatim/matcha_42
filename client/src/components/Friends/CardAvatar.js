import React from "react";
import { FriendCardAvatarStyle } from "./Styles/FriendCard.style";

export default function CardAvatar({img, status}) {
  return (
    <FriendCardAvatarStyle status={status} className="FriendCard__avatar">
      <img src={img} alt="Card Avatar" />
      <div className="FriendCard__avatar_status">
          <div className="FriendCard__avatar_status_type"></div>
      </div>
    </FriendCardAvatarStyle>
  );
}
