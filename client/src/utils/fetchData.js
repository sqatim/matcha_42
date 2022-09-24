import axios from "axios";
import { sendNotification } from "../state/userSlice";

export const URL = `http://localhost:3001`;

export const loginRequest = async (username, password) => {
  const result = await axios
    .post(`${URL}/login`, {
      username,
      password,
    })
    .then((value) => value.data);
  return result;
};

export const directLoginRequest = async () => {
  const result = await axios
    .get(`${URL}/users/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((value) => value.data);
  return result;
};

export const setPositionRequest = async (data) => {
  let result;
  if (data.position == null) {
    const ipInfo = await axios
      .get("https://ipinfo.io/105.154.1.237?token=f5a7b56f410145")
      .then((value) => value.data.loc);
    const pos = ipInfo.split(",");
    result = await axios
      .put(
        `${URL}/profile/me/position`,
        {
          position: [parseFloat(pos[0]), parseFloat(pos[1])],
          positionSelected: data.positionSelected,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((value) => ({
        position: value.data.user.position,
        positionSelected: value.data.user.positionSelected,
      }));
  } else {
    result = await axios
      .put(
        `${URL}/profile/me/position`,
        { position: data.position, positionSelected: data.positionSelected },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((value) => ({
        position: value.data.user.position,
        positionSelected: value.data.user.positionSelected,
      }));
  }
  return result;
};

export const likeRequest = (id, setType, dispatch, myData) => {
  axios
    .post(
      `${URL}/friends/me/addFriend/${id}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then(() => {
      console.log("why brother");
      dispatch(sendNotification(myData));
      setType("Cancel");
    });
};
export const matchRequest = (id, setType, dispatch, myData) => {
  axios
    .post(
      `${URL}/friends/me/acceptFriend/${id}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then(() => {
      dispatch(sendNotification(myData));
      setType("Friends");
    });
};
export const cancelRequest = (id, setType) => {
  axios
    .delete(`${URL}/friends/me/cancelRequest/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(() => {
      setType("Add");
    });
};

export const removeFriendRequest = (id, setType) => {
  const result = axios
    .delete(`${URL}/friends/me/removeFriend/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((value) => {
      if (setType) setType("Add");
      return value;
    });
  return result;
};

export const retrieveConversationRequest = (id, setType) => {
  axios
    .delete(`${URL}/friends/me/removeFriend/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(() => {
      setType("Add");
    });
};

export const getMyConversationsRequest = async () => {
  const result = await axios
    .get(`${URL}/conversation/me/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((value) => value.data);
  return result;
};

export const getConversationWithMyFriendRequest = async (friendId) => {
  const result = await axios
    .get(`${URL}/conversation/find/me/friend/${friendId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((value) => value.data);
  return result;
};

export const getMessagesOfConversationRequest = (
  conversationId,
  offset,
  limit
) => {
  const result = axios
    .get(
      `${URL}/message/me/conversation/${conversationId}?offset=${offset}&limit=${limit}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then((value) => {
      return value.data;
    });
  return result;
};

export const findMessageOfConversation = (setConversations) => {
  axios
    .get(`${URL}/conversation/me/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(({ data }) => {});
};

export const sendMessageRequest = (conversationId, text) => {
  axios
    .post(
      `${URL}/message/me/newMessage/conversation/${conversationId}`,
      { text },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then(() => {});
};

export const getMyNotifications = () => {
  const result = axios.get(`${URL}/notification/me/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return result;
};
