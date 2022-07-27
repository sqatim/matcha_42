import axios from "axios";

const URL = `http://localhost:3001/`;

export const loginRequest = async (username, password) => {
  const result = await axios
    .post("http://localhost:3001/login", {
      username,
      password,
    })
    .then((value) => value.data);   
  return result;
};
