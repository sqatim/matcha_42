import { HeartOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const messageType = (type, username) => {
  if (type == "Add") return `${username} just lover your profile`;
  else if (type == "Match") return `${username} just matched with you`;
};

export const notificationEvent = ({ username, type }, navigate) => {
  notification.open({
    message: messageType(type, username),
    onClick: () => {
      console.log("just for test");
      navigate(`/profile/${username}`);
    },
    icon: (
      <HeartOutlined
        style={{
          color: "#108ee9",
        }}
      />
    ),
  });
};
