import styled from "styled-components";

export const RecoverStyle = styled.div`
  .recover__resetPassword {
    color: #0c7fda;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.4rem;
  .recover__title {
    align-self: flex-start;
    font-size: 25px;
    font-weight: 600;
  }
  hr {
    height: 1px;
    background-color: #e9e7f3;
    border: none;
    width: 100%;
  }
  .recover__text {
    align-self: flex-start;
    font-size: 16px;

  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    input {
      height: 50px;
      border: 1px solid #ccd0d5;
      background-color: #f5f6f7;
      padding: 0 1rem;
      border-radius: 10px;
      ::placeholder {
        color: #838696;
      }
    }
    margin-bottom: 2rem;
  }
`;

export const RecoverButtonStyle = styled.input`
  width: 260px !important;
  background-color: #0c7fda !important;
  border: none !important;
  padding: 0  !important;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  color: #ffffff;
  height: 50px;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const NotFoundStyle = styled.div`
  background-color:  #FFEBE8;
  border: 1px solid #DD3C10;
  padding: 1rem 1.3rem;
  .notFound__title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: .5rem;
  }
  .notFound__text {
    font-size: 16px;
  }
`;
