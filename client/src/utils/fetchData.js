import axios from "axios";

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
      .then((value) => ({position: value.data.user.position, positionSelected: value.data.user.positionSelected}));
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
      .then((value) => ({position: value.data.user.position, positionSelected: value.data.user.positionSelected}));
  }
  return result;
};
