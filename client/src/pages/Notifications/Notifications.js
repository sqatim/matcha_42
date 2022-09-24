import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationsContainer from "../../components/Notifications/NotificationsContainer";
import { getMyNotifications } from "../../utils/fetchData";
import { NotificationsStyle } from "./Notifications.style";

export default function Notifications({ setName }) {
  const [notifications, setNotifications] = useState([]);
  const [loader, setLoader] = useState(false);
  const { notification } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setName("Notifications");
    getMyNotifications().then((value) => {
      console.log("notification:", value.data);
      setNotifications(value.data);
      setLoader(true);
    });
  }, []);
  useEffect(() => {
    if (notification) {
      console.log(notification);
      let type;
      if (notification.type == "Add") type = "Like";
      else type = notification.type;
      const notif = {
        sender: {
          username: notification.username,
          avatar: notification.avatar,
        },
        check: false,
        type: type,
        createdAt: new Date(),
      };
      const newNotification = [...notifications];
      newNotification.unshift(notif);
      setNotifications([...newNotification]);
      // dispatch();
      // notificationEvent(
      //   {
      //     username: notification.username,
      //     avatar: notification.avatar,
      //     type: notification.type,
      //   },
      //   navigate
      // );
    }
  }, [notification]);
  return (
    <NotificationsStyle>
      {loader && <NotificationsContainer notifications={notifications} />}
    </NotificationsStyle>
  );
}
