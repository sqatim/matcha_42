import React, { useEffect, useState } from "react";
import NotificationsContainer from "../../components/Notifications/NotificationsContainer";
import { getMyNotifications } from "../../utils/fetchData";
import { NotificationsStyle } from "./Notifications.style";

export default function Notifications({ setName }) {
  const [notifications, setNotifications] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setName("Notifications");
    getMyNotifications().then((value) => {
      console.log(value.data);
      setNotifications(value.data);
      setLoader(true);
    });
  }, []);
  return (
    <NotificationsStyle>
      {loader && <NotificationsContainer notifications={notifications} />}
    </NotificationsStyle>
  );
}
