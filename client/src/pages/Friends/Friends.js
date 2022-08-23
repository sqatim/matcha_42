import React, { useEffect } from "react";
import FriendCardContainer from "../../components/Friends/FriendCardContainer";
import { FriendsStyle } from "./Friends.style";

export default function Friends({ setName }) {
  useEffect(() => {
    setName("Friends");
  }, []);
  return (
    <FriendsStyle>
      <FriendCardContainer />
    </FriendsStyle>
  );
}
