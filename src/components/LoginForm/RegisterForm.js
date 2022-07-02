import React, { useEffect, useState } from "react";
import DateSelect from "./DateSelect";
import { DateOfBirthStyle, RegisterButtonStyle } from "./RegisterModal.style";
import { Bars } from "react-loader-spinner";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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
    console.log("email: " + email);
    console.log("password: " + password + " confirmPassword: " + confirm);
    console.log("day: " + day + " mounth: " + mounth + " year: " + year);
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
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(event) => {
          setEmail(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="password"
        name="checkPassword"
        placeholder="Confirm Password"
        value={confirm}
        required
        onChange={(event) => {
          setConfirm(event.target.value);
        }}
      />
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
