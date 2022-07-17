import React, { useEffect, useState } from "react";
import DateSelect from "./DateSelect";
import { DateOfBirthStyle, RegisterButtonStyle } from "./RegisterModal.style";
import { Bars } from "react-loader-spinner";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addDateOfBirth,
  addEmail,
  addFirstname,
  addLastname,
  addPassword,
  addUsername,
} from "../../state/registerSlice";
import axios from "axios";
import { registerNotification } from "../Nedded/Notification";

export default function RegisterForm({ setIsModalVisible }) {
  const { firstname, lastname, username, email, password, dateOfBirth } =
    useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("password");

  const [loading, setLoading] = useState(false);
  const [day, setDay] = useState("");
  const [mounth, setMounth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3001/register", {
        firstname,
        lastname,
        email,
        password,
        username,
        dateOfBirth
      })
      .then((value) => {
        setLoading(false);
        if (value.data.state == "success") {
          console.log(value.data);
          registerNotification(value.data.user.username.toUpperCase());
          setIsModalVisible(false);
        } else {
          console.log(value.data.data);
        }
      });
  };

  const changeVisible = () => {
    if (!visible) setType("text");
    else setType("password");
    setVisible(!visible);
  };

  useEffect(() => {
    if (day && mounth && year) {
      dispatch(addDateOfBirth(year + "-" + mounth + "-" + day));
    }
  }, [day, mounth, year]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="register__title_form_name">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstname}
          required
          onChange={(event) => {
            dispatch(addFirstname(event.target.value));
          }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastname}
          required
          onChange={(event) => {
            dispatch(addLastname(event.target.value));
          }}
        />
      </div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        required
        onChange={(event) => {
          dispatch(addUsername(event.target.value));
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(event) => {
          dispatch(addEmail(event.target.value));
        }}
      />
      <div className="registerForm__Form_password">
        <input
          className="registerForm__Form_password_input"
          type={type}
          placeholder="Password"
          value={password}
          onChange={(event) => {
            dispatch(addPassword(event.target.value));
          }}
          required
        />
        {visible ? (
          <EyeTwoTone onClick={changeVisible} style={{ fontSize: "150%" }} />
        ) : (
          <EyeInvisibleOutlined
            onClick={changeVisible}
            style={{ fontSize: "150%", color: "#D0D0D0" }}
          />
        )}
      </div>
      <DateOfBirthStyle>
        <p>Date of birth</p>
        <div className="register__birthSelect">
          <DateSelect setData={setDay} type="day" />
          <DateSelect setData={setMounth} type="month" />
          <DateSelect setData={setYear} type="year" />
        </div>
      </DateOfBirthStyle>
      {!loading ? (
        <RegisterButtonStyle type="submit" value={"Register"} />
      ) : (
        <Bars height={50} width="100%" color="#0c7fda" />
      )}
    </form>
  );
}
