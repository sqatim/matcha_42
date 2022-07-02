import styled from "styled-components";

export const LoginFormStyle = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 115px 0;
  .loginForm__welcome {
    text-align: center;
    color: #2b2938;
    font-size: 18px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    .loginForm__Form_input {
      width: 100%;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
    }
    input {
      border: none;
      width: 80%;
      height: 50px;
      border-radius: 4px;
      ::placeholder {
        color: #aca9bb;
      }
      &[type="submit"] {
        background-color: #0c7fda;
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;
        width: 100%;
        :hover {
          opacity: 0.8;
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
    .loginForm__Form_input_text {
      width: 100%;
    }
  }
  .loginForm__other {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    div {
      display: flex;
      gap: 0.2rem;
    }
    p span {
      color: #0c7fda;
      font-weight: 500;
    }
  }
  .loginForm__signInWith {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #d0d0d0;
    hr {
      width: 35%;
      height: 1px;
      background-color: #d0d0d0;
      border: none;
    }
  }
  .loginForm__oauth {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    button {
      width: 100%;
      height: 50px;
      border: 1px solid #000000;
      border-radius: 8px;
      background-color: #ffffff;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0 0 0 1.5rem;
      p {
        width: 75px;
        text-align: left;
      }
    }
  }
  .loginForm__copyright {
    font-size: 16px;
    align-self: flex-start;
    color: #aca9bb;
  }
`;
