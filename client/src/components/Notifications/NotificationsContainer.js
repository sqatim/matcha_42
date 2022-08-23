import React from "react";
import { NotificationsContainerStyle } from "./Notifications.style";
import Notification from "./Notification";
export default function NotificationsContainer({ notifications }) {
  return (
    <NotificationsContainerStyle>
      {notifications.map((element, key) => {
        const messages = {
          Like: "liked your profile",
          Match: "matched you",
          Photo: "liked you photo",
        };
        return (
          <Notification
            key={key}
            data={element}
            message={messages[element.type]}
          />
        );
      })}
    </NotificationsContainerStyle>
  );
}
