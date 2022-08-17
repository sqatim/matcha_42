import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  cancelRequest,
  likeRequest,
  matchRequest,
  removeFriendRequest,
  URL,
} from "../../utils/fetchData";
import { UserProfileButtonsStyle } from "./ProfileContent.style";
import { Button, Popover } from "antd";

const handleClick = (type, id, setType) => {
  if (type == "Match") matchRequest(id, setType);
  if (type == "Add") likeRequest(id, setType);
  if (type == "Cancel") cancelRequest(id, setType);
  if (type == "Remove") removeFriendRequest(id, setType);
};

export default function UserProfileButtons({ id }) {
  const [type, setType] = useState("");

  const content = (
    <div>
      <p onClick={() => handleClick("Remove", id, setType)}>Remove</p>
      <p>Block</p>
    </div>
  );
  useEffect(() => {
    axios
      .get(`${URL}/friends/me/type/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        if (data.status === "add") setType("Add");
        else if (data.status === "friends") setType("Friends");
        else if (data.status === "requested") setType("Cancel");
        else if (data.status === "pending") setType("Pending");
      });
  }, []);
  return (
    <UserProfileButtonsStyle type={type}>
      {(type == "Add" || type == "Pending") && (
        <div
          className="UserProfileContent__button_child friend"
          onClick={() => {
            handleClick(type == "Add" ? "Add" : "Match", id, setType);
          }}
        >
          <i className="fi fi-rs-heart"></i>
          <p>{type == "Add" ? "like" : "Match"}</p>
        </div>
      )}
      {type == "Friends" && (
        <Popover placement="bottom" content={content} trigger="click">
          <div className="UserProfileContent__button_child decline">
            <i className="fi fi-rr-following"></i>
            <p>{type}</p>
          </div>
        </Popover>
      )}
      {(type == "Pending" || type == "Cancel") && (
        <div
          className="UserProfileContent__button_child decline"
          onClick={() => {
            handleClick("Cancel", id, setType);
          }}
        >
          <i className="fi fi-rr-cross-circle"></i>
          <p>{type == "Pending" ? "Decline" : "Cancel"}</p>
        </div>
      )}
      {type == "Friends" && (
        <div className="UserProfileContent__button_child message">
          <i className="fi fi-rs-interface"></i>
          <p>Message</p>
        </div>
      )}
    </UserProfileButtonsStyle>
  );
}
