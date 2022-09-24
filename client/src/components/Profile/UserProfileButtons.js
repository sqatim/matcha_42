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
import { useDispatch, useSelector } from "react-redux";
import {
  sendFriendType,
  sendNotification,
  setFriendType,
} from "../../state/userSlice";

const handleClick = (type, id, setType, dispatch, myData) => {
  if (type == "Match" || type == "Add") {
    Object.assign(myData, { type, friendId: id });
    type == "Match" ? matchRequest(id, setType, dispatch,myData) : likeRequest(id, setType, dispatch,myData);
  }
  if (type == "Cancel") cancelRequest(id, setType);
  if (type == "Remove") removeFriendRequest(id, setType);
  dispatch(sendFriendType({ id, type }));
};

export default function UserProfileButtons({ friendUsername, friendId }) {
  const [type, setType] = useState("");
  const { id, username, friendType, avatar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const content = (
    <div>
      <p onClick={() => handleClick("Remove", friendId, setType, dispatch)}>Remove</p>
      <p>Block</p>
    </div>
  );
  useEffect(() => {
    axios
      .get(`${URL}/friends/me/type/${friendId}`, {
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
  useEffect(() => {
    if (friendType) {
      console.log("wal bnat:", friendType);
      if (friendType.type == "Add") setType("Pending");
      else if (friendType.type == "Cancel" || friendType.type == "Remove")
      setType("Add");
      else if (friendType.type == "Match") setType("Friends");
    }
  }, [friendType]);
  return (
    <UserProfileButtonsStyle type={type}>
      {(type == "Add" || type == "Pending") && (
        <div
          className="UserProfileContent__button_child friend"
          onClick={() => {
            handleClick(
              type == "Add" ? "Add" : "Match",
              friendId,
              setType,
              dispatch,
              {
                id,
                username,
                avatar
              }
            );
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
            handleClick("Cancel", friendId, setType, dispatch);
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
