import {CheckCircleFilled } from "@ant-design/icons";
import { notification } from "antd";
import React from "react";

export const Notification = (username) => {
  notification.open({
    message: "Registration Success",
    description:
      `Welcome ${username} to family`,
    icon: (
        <CheckCircleFilled style={{color: '#0f0'}}/>
    ),
  });
};
