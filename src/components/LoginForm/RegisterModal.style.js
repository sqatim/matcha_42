import styled from "styled-components";

export const RegisterStyle = styled.div`
  .register__signUp {
    color: #0c7fda;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const TitleStyle = styled.div`
  align-self: flex-start;
  .register__title {
    font-size: 25px;
    font-weight: 600;
  }
  .register__title_description {
    font-size: 18px;
    color: #838696;
  }
`;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.4rem;
  hr {
    height: 1px;
    background-color: #e9e7f3;
    border: none;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input {
      height: 50px;
      border: 1px solid #ccd0d5;
      background-color: #f5f6f7;
      padding: 0 1rem;
      border-radius: 10px;
      width: 100%;
      ::placeholder {
        color: #838696;
      }
    }
    .register__title_form_name {
      display: flex;
      justify-content: space-between;
      width: 100%;
      input {
        width: 46%;
      }
    }
    .registerForm__Form_password{
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #f5f6f7;
      border: 1px solid #ccd0d5;
      border-radius: 10px;
      padding-right: 1rem;
      .registerForm__Form_password_input{
        border: none;
      }
    }
  }
  @media screen and (max-width: 570px){
    .register__title_form_name {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      input {
        width: 100% !important;
      }
    }
  }
`;

export const DateOfBirthStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.6rem;
  p {
    font-size: 16px;
  }
  .register__birthSelect {
    display: flex;
    justify-content: space-between;
  }
  margin-bottom: 2rem;
  @media screen and (max-width: 425px){
    .register__birthSelect {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      /* justify-content: space-between; */
    }
    .ant-select.ant-select-single.ant-select-show-arrow{
      width: 100% !important;
    }
  }
`;

export const RegisterButtonStyle = styled.input`
  width: 260px !important;
  background-color: #0c7fda !important;
  border: none !important;
  padding: 0  !important;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  color: #ffffff;
  height: 50px;

  :hover{
    opacity: .8;
    transition: .5s;
    cursor: pointer;
  }
`;
