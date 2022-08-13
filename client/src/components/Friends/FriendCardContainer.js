import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { URL } from "../../utils/fetchData";
import FriendCard from "./FriendCard";
import { FriendCardContainerStyle } from "./Styles/FriendCardContainer.style";
import { friendsArr } from "../../utils/friends";

export default function FriendCardContainer() {
  const componentRef = useRef();
  const effectRun = useRef(false);
  const [friends, setFriends] = useState([]);
  let offset = 0;
  const fetchFriends = () => {
    axios
      .get(`${URL}/friends/me?limit=20&offset=${offset}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        const newFriends = [];
        data.map((element) => newFriends.push(element.recipient));
        setFriends((oldFriends) => [...oldFriends, ...newFriends]);
      });
    offset += 20;
  };
  const handleScroll = (event) => {
    if (
      componentRef.current.offsetHeight + componentRef.current.scrollTop + 1 >=
      componentRef.current.scrollHeight
    )
      fetchFriends();
  };
  useEffect(() => {
    if (effectRun.current == false) {
      fetchFriends();
      componentRef.current.addEventListener("scroll", handleScroll);
      return () => {
        effectRun.current = true;
        componentRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  useEffect(() => {}, [friends]);
  return (
    <FriendCardContainerStyle ref={componentRef}>
      {friends.map((element) => (
        <FriendCard
          firstname={element.firstname}
          lastname={element.lastname}
          username={element.username}
          img={element.avatar}
          status={element.status}
        />
      ))}
    </FriendCardContainerStyle>
  );
}
