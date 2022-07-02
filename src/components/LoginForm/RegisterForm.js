import React, { useEffect, useState } from "react";
import DateSelect from "./DateSelect";
import { DateOfBirthStyle, RegisterButtonStyle } from "./RegisterModal.style";
import { Bars } from "react-loader-spinner";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

export default function RegisterForm() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("password");

  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [day, setDay] = useState("");
  const [mounth, setMounth] = useState("");
  const [year, setYear] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("first name: " + firstname + " last name: " + lastname);
    console.log("username: " + username);
    console.log("email: " + email);
    console.log("password: " + password + " confirmPassword: " + confirm);
    console.log("day: " + day + " mounth: " + mounth + " year: " + year);
  };
  const changeVisible = () => {
    if (!visible) setType("text");
    else setType("password");
    setVisible(!visible);
  };
  useEffect(() => {
    if (loading == true) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);
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
            setFirstname(event.target.value);
          }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastname}
          required
          onChange={(event) => {
            setLastname(event.target.value);
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
          setUsername(event.target.value);
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      {/* <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      /> */}
      <div className="registerForm__Form_password">
          <input className="registerForm__Form_password_input" type={type} placeholder="Password" required />
          {visible ? (
            <EyeTwoTone onClick={changeVisible} style={{ fontSize: "150%" }} />
          ) : (
            <EyeInvisibleOutlined
              onClick={changeVisible}
              style={{ fontSize: "150%", color: "#D0D0D0" }}
            />
          )}
        </div>
      {/* <input
        type="password"
        name="checkPassword"
        placeholder="Confirm Password"
        value={confirm}
        required
        onChange={(event) => {
          setConfirm(event.target.value);
        }}
      /> */}
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
