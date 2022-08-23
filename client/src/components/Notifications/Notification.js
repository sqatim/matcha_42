import React from "react";
import { NotificationStyle } from "./Notifications.style";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
export default function Notification({ data, message }) {
  const navigate = useNavigate();
  const handleClick = (data) => {
    if (data.type == "Like" || data.type == "Match")
      navigate(`/profile/${data.sender.username}`);
  };
  return (
    <NotificationStyle>
      <img src={data.sender.avatar} />
      <div className="notification__content" onClick={() => handleClick(data)}>
        {
          <p className="notification__content_text">
            <span>{data.sender.username}</span> {message}
          </p>
        }
        <p className="notification__content_time">{format(data.createdAt)}</p>
      </div>
      {!data.check && <div className="notification__content_checked"></div>}
    </NotificationStyle>
  );
}
